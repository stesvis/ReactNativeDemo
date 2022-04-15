import React, { useEffect, useState } from "react";

import MapView from "react-native-maps";
import { StyleSheet } from "react-native";
import useLastKnownLocation from "../hooks/useLastKnownLocation";

const AppMapView = ({
  initialLocation,
  style,
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  const location = useLastKnownLocation();
  initialLocation = initialLocation ?? location;
  const [region, setRegion] = useState();

  useEffect(() => {
    if (!initialLocation) return;

    setRegion({
      latitude: initialLocation?.latitude,
      longitude: initialLocation?.longitude,
      latitudeDelta: 3,
      longitudeDelta: 3,
    });

    return () => {};
  }, [initialLocation]);

  // if (!initialLocation) return <LoadingOverlay visible={true} />;

  return (
    <MapView
      initialRegion={region}
      region={region}
      //onRegionChangeComplete runs when the user stops dragging MapView
      onRegionChangeComplete={(region) => setRegion(region)}
      showsUserLocation
      showsMyLocationButton
      style={[styles.map, style]}
      // userInterfaceStyle={colorScheme}
      userInterfaceStyle="light"
      {...otherProps}>
      {otherProps.children}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
    // height: "100%",
    // width: "100%",
    // height: Dimensions.get("window").height,
    // width: Dimensions.get("window").width,
  },
});

export default AppMapView;
