import { Card, LinkButton, Text } from "../ui";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";

import { AppContext } from "../../context/appContext";
import PhoneNumber from "../PhoneNumber";
import PressableOpacity from "../PressableOpacity";
import Row from "../Row";
import openMap from "react-native-open-maps";
import { palette } from "../../styles/colors";

const CustomerCard = ({
  navigation,
  onLongPress = () => {},
  onPress = () => {},
  onTattlePress = () => {},
  style,
  customer,
  ...otherProps
}) => {
  const {
    appTheme: { themeStyle },
  } = useContext(AppContext);

  const hasLocation =
    customer?.geolocation?.location?.latitude &&
    customer?.geolocation?.location?.longitude;
  const hasTattle = customer?.tattleDevicesCount > 0;

  const handleViewDirections = () => {
    if (!hasLocation) return;

    openMap({
      end: `${customer.geolocation.location.latitude},${customer.geolocation.location.longitude}`,
      // latitude: customer.geolocation.location.latitude,
      // longitude: customer.geolocation.location.longitude,
      // query: `${customer.geolocation.location.latitude},${customer.geolocation.location.longitude}`,
    });
  };

  return (
    <PressableOpacity
      onLongPress={onLongPress}
      onPress={onPress}
      {...otherProps}>
      <Card style={[styles.card, style]}>
        <View style={styles.content}>
          {/* row 1 */}
          <Row style={styles.row}>
            <Text bold faIcon="suitcase">
              {customer?.company}
            </Text>
          </Row>
          {/* row 2 */}
          <Row style={styles.row}>
            <View>
              <Text faIcon="user">
                {customer?.contactName ? customer?.contactName : "-"}
              </Text>
            </View>
            <PhoneNumber
              phoneNumber={customer?.phone}
              faIcon="phone"
              style={themeStyle.textLink}
              visible={customer?.phone}>
              {customer?.phone}
            </PhoneNumber>
          </Row>
          {/* row 3 */}
          <Row style={styles.row}>
            <Text
              faIcon5="directions"
              onPress={handleViewDirections}
              style={hasLocation ? themeStyle.textLink : null}>
              {hasLocation ? "View Directions" : "-"}
            </Text>
            {(hasTattle && (
              <Text
                communityIcon="signal-variant"
                onPress={onTattlePress}
                style={styles.withTattle}>
                Tattle installed!
              </Text>
            )) || (
              <LinkButton
                onPress={onTattlePress}
                title="Install tattle"
                uppercase={false}
              />
            )}
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
  phone: {},
  row: {
    marginVertical: 5,
  },
  withTattle: {
    color: palette.success,
  },
});

export default CustomerCard;
