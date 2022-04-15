import Button from "../ui/Button";
import ButtonTypes from "../../styles/buttons";
import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = ({
  disabled = false,
  style,
  textStyle,
  title = "Submit",
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  const { handleSubmit } = useFormikContext();

  return (
    <Button
      disabled={disabled}
      style={style}
      textStyle={textStyle}
      title={title}
      type={ButtonTypes.primary}
      onPress={handleSubmit}
      {...otherProps}
    />
  );
};

export default SubmitButton;
