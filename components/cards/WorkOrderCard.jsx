import { AppContext, ModalContext } from "../../context/appContext";
import { Card, LinkButton, Text } from "../ui";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { colors, palette } from "../../styles/colors";

import { Ionicons } from "@expo/vector-icons";
import PhoneNumber from "../PhoneNumber";
import PressableOpacity from "../PressableOpacity";
import Row from "../Row";
import Services from "../../services/services";
import { StatusEnum } from "../../misc/enums";
import useCurrentUserInfo from "../../hooks/useCurrentUserInfo";

("../../hooks/useTheme");

const WorkOrderCard = ({
  onAssign = () => {},
  onLongPress = () => {},
  onPress = () => {},
  style,
  workOrder,
  ...otherProps
}) => {
  const {
    appTheme: { colorScheme, themeStyle },
  } = useContext(AppContext);

  const { showAlert } = useContext(ModalContext);
  const userInfo = useCurrentUserInfo(false);

  const date =
    workOrder?.status === StatusEnum.completed
      ? workOrder?.completedDateFormatted
      : workOrder?.dueDateFormatted;

  const priorityColor =
    colors[colorScheme].statusColors[
      workOrder?.rowClass ? workOrder?.rowClass : "default"
    ];
  const orderStatusColor = Services.utility.orderStatusToColor(
    workOrder?.orderStatusId,
    colorScheme
  );

  return (
    <PressableOpacity
      onLongPress={onLongPress}
      onPress={onPress}
      {...otherProps}>
      <Card
        style={[
          styles.card,
          workOrder?.isHighPriority && themeStyle.highPriority,
          style,
        ]}>
        <View
          style={[
            styles.statusBar,
            {
              backgroundColor: priorityColor,
            },
          ]}
        />
        <View style={styles.content}>
          {/* row 1 */}
          <Row style={styles.row}>
            <Text faIcon="suitcase" style={styles.customer}>
              {workOrder?.customerDisplayName}
            </Text>
            <Text
              style={[
                styles.date,
                workOrder?.status === StatusEnum.completed && {
                  color: orderStatusColor,
                },
              ]}>
              {date}
            </Text>
          </Row>
          {/* row 2 */}
          <Row flexLeft={1.5} style={styles.row}>
            <View>
              {workOrder?.productsListFormatted?.map((productInfo, index) => (
                <Text communityIcon="gas-station" key={productInfo + index}>
                  {productInfo}
                </Text>
              ))}
            </View>
            <Text
              faIcon="circle"
              style={[styles.orderStatus, { color: orderStatusColor }]}>
              {workOrder?.orderStatus}
            </Text>
          </Row>
          {/* row 3 */}
          <Row
            style={styles.row}
            visible={workOrder?.locationName || workOrder?.notes}>
            <Text materialIcon="location-pin" placeholder="No info">
              {workOrder?.locationName}
            </Text>
            {workOrder?.notes && (
              <Ionicons
                name="information-circle"
                onPress={() =>
                  showAlert({
                    title: "Notes",
                    message: workOrder?.notes,
                  })
                }
                size={40}
                style={styles.infoIcon}
              />
            )}
          </Row>
          {/* row 4 */}
          <Row
            style={styles.row}
            // visible={
            //   workOrder?.assignedToUserId ||
            //   workOrder?.truckId ||
            //   workOrder?.completedByUserId
            // }
          >
            {(workOrder?.completedByUserId && (
              <PhoneNumber
                phoneNumber={workOrder?.completedByPhoneNumber}
                faIcon="user">
                {workOrder?.completedByName ?? ""}
              </PhoneNumber>
            )) ||
              (workOrder?.assignedToUserId !== null && (
                <PhoneNumber
                  phoneNumber={workOrder?.assignedToPhoneNumber}
                  faIcon="user">
                  {workOrder?.assignedToName ?? ""}
                </PhoneNumber>
              )) ||
              ((userInfo?.isAdmin ||
                (!workOrder?.isDriverLocked &&
                  userInfo?.canAssignDeliveryOrders)) && (
                <LinkButton
                  onPress={onAssign}
                  title="Assign"
                  uppercase={false}
                />
              )) || <Text faIcon="user" placeholder="Unassigned" />}
            <Text communityIcon="tanker-truck" placeholder="No unit">
              {workOrder?.truckName}
            </Text>
          </Row>
        </View>
      </Card>
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 0,
    flex: 1,
    flexDirection: "row",
    padding: 10,
    paddingStart: 5,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  },
  content: {
    flex: 1,
    flexDirection: "column",
  },
  customer: {
    // alignSelf: "flex-start",
    fontWeight: "bold",
  },
  date: {
    textAlign: "right",
    width: 100,
  },
  infoIcon: {
    color: palette.link,
    position: "absolute",
    right: 0,
    top: -10,
  },
  orderStatus: {},
  row: {
    marginVertical: 5,
  },
  statusBar: {
    backgroundColor: "red",
    height: "100%",
    marginEnd: 5,
    width: 7,
  },
});

export default WorkOrderCard;
