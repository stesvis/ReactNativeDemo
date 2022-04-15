import { FlatList, StyleSheet, View } from "react-native";
import React, { useContext } from "react";

import { AppContext } from "../../context/appContext";

const FlatListExtended = ({
  data,
  keyExtractor,
  onRefresh,
  refreshing,
  renderItem,
  StickyFooterComponent,
  style,
  ...otherProps
}) => {
  const {
    appTheme: { colorScheme, themeStyle },
  } = useContext(AppContext);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        onRefresh={onRefresh}
        refreshing={refreshing}
        renderItem={renderItem}
        RenderItemComponent
        style={[themeStyle.flatListFooter, styles.list, style]}
        {...otherProps}
      />
      <View style={styles.footer}>{StickyFooterComponent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  footer: {
    borderRadius: 5,
    bottom: 0,
    paddingHorizontal: 5,
    paddingVertical: 2,
    position: "absolute",
    width: "100%",
  },
  list: {},
});

export default FlatListExtended;
