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

const ServiceOrderCard = ({
  onAssign = () => {},
  onLongPress = () => {},
  onPress = () => {},
  style,
  serviceOrder,
  ...otherProps
}) => {
  const {
    appTheme: { colorScheme },
  } = useContext(AppContext);

  const { showAlert } = useContext(ModalContext);
  const userInfo = useCurrentUserInfo(false);

  const orderStatusColor = Services.utility.orderStatusToColor(
    serviceOrder?.orderStatusId,
    colorScheme
  );
  const technicians = serviceOrder?.assignedToNames?.join(", ");
  const date =
    serviceOrder?.status === StatusEnum.completed
      ? serviceOrder?.completedDateFormatted
      : serviceOrder?.dueDateFormatted;

  return (
    <PressableOpacity
      onLongPress={onLongPress}
      onPress={onPress}
      {...otherProps}>
      <Card style={[styles.card, style]}>
        <View
          style={[
            styles.statusBar,
            {
              backgroundColor:
                colors[colorScheme].statusColors[
                  serviceOrder?.rowClass ? serviceOrder?.rowClass : "default"
                ],
            },
          ]}
        />
        <View style={styles.content}>
          {/* row 1 */}
          <Row style={styles.row}>
            <Text communityIcon="wrench" style={[styles.category]}>
              {serviceOrder?.categoryName}
            </Text>
            <Text
              style={[
                styles.date,
                serviceOrder?.status === StatusEnum.completed && {
                  color: orderStatusColor,
                },
              ]}>
              {date}
            </Text>
          </Row>
          {/* row 2 */}
          <Row style={styles.row}>
            <View>
              <Text communityIcon="message-text">{serviceOrder?.title}</Text>
            </View>
            <Text faIcon="circle" style={{ color: orderStatusColor }}>
              {serviceOrder?.orderStatus}
            </Text>
          </Row>
          {/* row 3 */}
          <Row style={styles.row}>
            <Text faIcon="suitcase">
              {serviceOrder?.customerDisplayName ?? "-"}
            </Text>
            {serviceOrder?.notes && (
              <Ionicons
                name="information-circle"
                onPress={() =>
                  showAlert({ title: "Notes", message: serviceOrder?.notes })
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
            //   serviceOrder?.assignedToIds?.length > 0 ||
            //   serviceOrder?.completedByUserId
            // }
          >
            {(serviceOrder?.completedByUserId && (
              <PhoneNumber
                phoneNumber={serviceOrder?.completedByPhoneNumber}
                faIcon="user">
                {serviceOrder?.completedByName ?? ""}
              </PhoneNumber>
            )) ||
              (serviceOrder?.assignedToNames?.length > 0 && (
                <Text faIcon5="users">{technicians}</Text>
              )) ||
              ((userInfo?.isAdmin || !serviceOrder?.isTechLocked) && (
                <LinkButton
                  onPress={onAssign}
                  title="Assign"
                  uppercase={false}
                />
              )) || <Text faIcon="user" placeholder="Unassigned" />}
            {/* <Text>x</Text> */}
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
  category: {
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
  row: {
    marginVertical: 5,
  },
  statusBar: {
    height: "100%",
    marginEnd: 5,
    width: 7,
  },
});

export default ServiceOrderCard;
