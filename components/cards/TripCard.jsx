import { AppContext, ModalContext } from "../../context/appContext";
import { Card, LinkButton, Text } from "../ui";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { colors, palette } from "../../styles/colors";

import { Ionicons } from "@expo/vector-icons";
import PressableOpacity from "../PressableOpacity";
import Row from "../Row";
import Services from "../../services/services";
import { TripStatusIdEnum } from "../../misc/enums";

const TripCard = ({
  navigation,
  onLongPress = () => {},
  onPress = () => {},
  style,
  trip,
  ...otherProps
}) => {
  const {
    appTheme: { colorScheme },
  } = useContext(AppContext);
  const { showAlert } = useContext(ModalContext);

  const tripStatusColor = Services.utility.orderStatusToColor(
    trip?.travelStatusId,
    colorScheme
  );

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
                  trip?.rowClass ? trip?.rowClass : "default"
                ],
            },
          ]}
        />
        <View style={styles.content}>
          {/* row 1 */}
          <View style={styles.row}>
            <Text bold faIcon5="users">
              {trip?.userNames?.join(", ")}
            </Text>
          </View>
          {/* row 2 */}
          <View style={styles.row}>
            <Text italic>{trip?.purpose}</Text>
          </View>
          {/* row 3 */}
          <View style={styles.row}>
            <Text
              faIcon="circle"
              iconColor={tripStatusColor}
              style={{ color: tripStatusColor }}>
              {trip?.travelStatus}
            </Text>
            {trip?.notes && (
              <Ionicons
                name="information-circle"
                onPress={() =>
                  showAlert({
                    title: "Notes",
                    message: trip?.notes,
                  })
                }
                size={40}
                style={styles.infoIcon}
              />
            )}
          </View>
          {/* row 4 */}
          <Row
            flexLeft={1}
            flexRight={0}
            style={styles.row}
            visible={trip?.travelStatusId !== TripStatusIdEnum.completed}>
            <Text faIcon5="flag-checkered">
              {Services.utility.formatDateAndTime(trip?.eta)}
            </Text>
          </Row>
          {/* row 5 */}
          <Row
            flexLeft={1}
            flexRight={0}
            style={styles.row}
            visible={trip?.travelStatusId !== TripStatusIdEnum.new}>
            <Text
              communityIcon={
                trip?.travelStatusId === TripStatusIdEnum.inProgress
                  ? "account-check"
                  : null
              }
              faIcon5={
                trip?.travelStatusId !== TripStatusIdEnum.inProgress
                  ? "flag-checkered"
                  : null
              }
              iconColor={tripStatusColor}
              style={{ color: tripStatusColor }}>
              {Services.utility.formatDateAndTime(
                trip?.mostRecentCheckIn?.createdDate
              )}
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
  infoIcon: {
    color: palette.link,
    position: "absolute",
    right: 0,
    top: -10,
  },
  row: {
    marginVertical: 2,
  },
  statusBar: {
    height: "100%",
    marginEnd: 5,
    width: 7,
  },
});

export default TripCard;
