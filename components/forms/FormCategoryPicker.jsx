import { CircleButton, ErrorMessage } from "../ui";
import { GlobalHandlerContext, LoadingContext } from "../../context/appContext";
import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";

import CategoryForm from "../../screens/contents/CategoryForm";
import DropdownSelect from "./DropdownSelect";
import FormLabel from "./FormLabel";
import FormRow from "../FormRow";
import HorizontalView from "../HorizontalView";
import Modal from "../modals/Modal";
import Required from "../Required";
import Row from "../Row";
import { useFormikContext } from "formik";

const FormCategoryPicker = ({
  disabled = false,
  icon,
  itemLabelProperty,
  items,
  itemValueProperty,
  label,
  name,
  onSelectItem = () => {},
  required,
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const { loading, setLoading } = useContext(LoadingContext);

  const formik = useFormikContext();
  const { errors, setFieldTouched, setFieldValue, touched, values } = formik;

  const handleBlur = (item) => {
    setFieldTouched(name, true);
    setFieldValue(name, item ? item[itemValueProperty] : null);
  };

  const handleCreateCategory = async (values) => {};

  const handleSelectItem = (item) => {
    setFieldValue(name, item ? item[itemValueProperty] : null);
    setFieldTouched(name, true);
    onSelectItem(item, formik);
  };

  return (
    <>
      <FormRow>
        <View style={styles.container}>
          <Row style={{ marginBottom: 5 }}>
            <HorizontalView>
              <FormLabel horizontal text={label} />
              <Required text="*" visible={required} />
            </HorizontalView>
            <CircleButton
              materialIcon="add"
              iconSize={20}
              onPress={() => setShowCategoryForm(true)}
              size={30}
              type={ButtonTypes.primary}
            />
          </Row>
          <DropdownSelect
            disabled={disabled}
            icon={icon}
            itemLabelProperty={itemLabelProperty}
            items={items}
            itemValueProperty={itemValueProperty}
            onBlur={handleBlur}
            onSelectItem={handleSelectItem}
            style={styles.dropdown}
            selectedValue={values[name]}
            {...otherProps}
          />
        </View>
        <ErrorMessage
          error={errors[name]}
          visible={touched[name] && errors[name]}
        />
      </FormRow>
      <Modal
        onClose={() => setShowCategoryForm(false)}
        // title="Add new customer"
        visible={showCategoryForm}>
        <CategoryForm loading={loading} onSubmit={handleCreateCategory} />
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
  dropdown: {},
  labelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 5,
    marginEnd: 10,
  },
});

export default FormCategoryPicker;
