import { Platform, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { AppContext } from "../../context/appContext";
import DateTimePicker from "@react-native-community/datetimepicker";
import LinkButton from "../ui/LinkButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "../modals/Modal";
import PressableOpacity from "../PressableOpacity";
import Row from "../Row";
import { Sizes } from "../../styles/sizes";
import { colors } from "../../styles/colors";
import dayjs from "dayjs";

const AppDateTimePicker = ({
  date,
  disabled = false,
  horizontal,
  mode = "date",
  onSelectDateTime = () => {},
  placeholder,
  style,
  textStyle,
  width,
  ...otherProps
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [textBoxValue, setTextBoxValue] = useState("");
  const [selectedDateTime, setSelectedDateTime] = useState();
  const [currentDateTime, setCurrentDateTime] = useState();
  const now = new Date();
  now.setHours(0, 0, 0, 0);

  const {
    appTheme: { colorScheme, themeStyle },
  } = useContext(AppContext);

  const isAndroid = Platform.OS === "android";

  useEffect(() => {
    console.log("----------");
    console.log(`date ${Platform.OS}`, date);
    setSelectedDateTime(date);
  }, [date]);

  useEffect(() => {
    if (!selectedDateTime) return;

    // Format the date in the textBox
    setTextBoxValue(
      selectedDateTime
        ? dayjs(selectedDateTime).format(
            mode === "date" ? "D MMM, YYYY" : "HH:mm"
          )
        : ""
    );
  }, [selectedDateTime]);

  const onCancel = () => {
    setShowPicker(false);
  };

  const onChange = (event, selectedDate) => {
    if (event.type === "dismissed") return setShowPicker(false);

    const dateTime = new Date((selectedDate ?? selectedDateTime).toString());
    setCurrentDateTime(dateTime);

    selectedDate = new Date(selectedDate).toString();

    if (!isAndroid) return;

    setShowPicker(false);
    setSelectedDateTime(dateTime);

    const localDateTime =
      mode === "date"
        ? dayjs(selectedDate).format("YYYY-MM-DD") //new Date(currentDateTime).toLocaleString()
        : dayjs(selectedDate).format("HH:mm:ss");

    onSelectDateTime(selectedDate, localDateTime);
  };

  const onDone = () => {
    setShowPicker(false);
    setSelectedDateTime(currentDateTime);

    const localDateTime =
      mode === "date"
        ? dayjs(currentDateTime).format("YYYY-MM-DD") //new Date(currentDateTime).toLocaleString()
        : dayjs(currentDateTime).format("HH:mm:ss");

    onSelectDateTime(currentDateTime, localDateTime);
  };

  return (
    <>
      <PressableOpacity
        disabled={disabled}
        onPress={() => setShowPicker(true)}
        style={[styles.pressable, style]}>
        <View
          style={[themeStyle.formFieldContainer, styles.container, { width }]}>
          {selectedDateTime ? (
            <Text style={[themeStyle.text, styles.text, textStyle]}>
              {textBoxValue}
            </Text>
          ) : (
            <Text
              style={[themeStyle.placeholder, styles.placeholder, textStyle]}>
              {placeholder}
            </Text>
          )}

          <MaterialCommunityIcons
            color={colors[colorScheme].textColor}
            name="calendar-month"
            size={20}
            style={styles.calendarIcon}
          />
        </View>
      </PressableOpacity>

      {/* Android DateTimePicker */}
      {isAndroid && showPicker && (
        <DateTimePicker
          display="default"
          is24Hour={true}
          mode={mode}
          onChange={onChange}
          testID="dateTimePicker"
          value={new Date()}
          />
          )}
          {console.log('now: ', now)}

      {/* iOS DateTimePicker */}
      {!isAndroid && (
        <Modal hideCloseButton visible={showPicker}>
          <DateTimePicker
            display={mode === "date" ? "spinner" : "spinner"}
            is24Hour={true}
            mode={mode}
            onChange={onChange}
            testID="dateTimePicker"
            value={currentDateTime ?? now}
          />
          <Row flexLeft={1} flexRight={1} style={styles.iOSButtonsHeader}>
            <LinkButton
              onPress={onCancel}
              style={styles.button}
              title="Cancel"
            />
            <LinkButton onPress={onDone} style={styles.button} title="Ok" />
          </Row>
        </Modal>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
  },
  calendarIcon: {
    marginStart: 5,
  },
  container: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 22.5,
    flexDirection: "row",
    height: 45,
    paddingHorizontal: 10,
  },
  horizontalText: {
    textAlign: "right",
  },
  iOSButtonsHeader: {
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  modalContainer: {
    // height: "80%",
  },
  placeholder: {
    flex: 1,
    fontSize: Sizes.textFontSize,
  },
  pressable: {
    flex: 1,
  },
  text: {
    flex: 1,
    fontSize: Sizes.textFontSize,
  },
});

export default AppDateTimePicker;
