import { CircleButton, ErrorMessage, LinkButton } from "../ui";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import ButtonTypes from "../../styles/buttons";
import FormLabel from "./FormLabel";
import FormRow from "../FormRow";
import Required from "../Required";
import Row from "../Row";
import TruckProduct from "../TruckProduct";
import { useFormikContext } from "formik";

const FormTruckProducts = ({
  availableProducts,
  errorFieldName,
  label,
  name,
  onSelectProduct = () => {},
  required,
  style,
  visible = true,
  ...otherProps
}) => {
  if (!visible) return null;

  const formik = useFormikContext();
  const { errors, handleBlur, setFieldValue, touched, values } = formik;

  const [productsList, setProductsList] = useState(
    values[name]?.length > 0 ? values[name] : []
  );

  useEffect(() => {
    // console.log(name, values[name]);
    setProductsList(values[name]);
  }, [values[name]]);

  const handleRemoveLastProduct = () => {
    const removed = productsList?.pop();
    setProductsList(productsList.filter((x) => x !== removed));
  };

  const handleSelectTruck = (product, index) => {
    setFieldValue(`${name}[${index}]`, product);
    onSelectProduct(product, formik);
  };

  return (
    <FormRow>
      <Row style={{ marginBottom: 5 }}>
        <View style={{ flexDirection: "row" }}>
          <FormLabel horizontal text={label} />
          <Required text="*" visible={required} />
        </View>
        <CircleButton
          materialIcon="add"
          iconSize={20}
          onPress={() =>
            setProductsList([
              ...productsList,
              {
                productId: 0,
                totalLoad: null,
                currentLoad: null,
              },
            ])
          }
          size={30}
          type={ButtonTypes.primary}
        />
      </Row>
      {productsList?.map((truckProduct, index) => (
        <TruckProduct
          key={index}
          name={`${name}[${index}]`}
          onBlur={() => handleBlur(name)}
          onSelected={(selectedTruck) =>
            handleSelectTruck(selectedTruck, index)
          }
          products={availableProducts}
          truckProduct={truckProduct}
        />
      ))}
      <LinkButton
        onPress={handleRemoveLastProduct}
        style={{ alignSelf: "flex-end" }}
        textStyle={{ fontWeight: "normal" }}
        title="Remove"
        uppercase={false}
      />
      <ErrorMessage
        error={errors[errorFieldName]}
        visible={touched[name] && errors[errorFieldName]}
      />
    </FormRow>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default FormTruckProducts;
