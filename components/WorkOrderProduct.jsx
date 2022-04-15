import React, { useEffect, useState } from "react";

import DropdownSelect from "./forms/DropdownSelect";
import Enumerable from "linq";
import HorizontalView from "./HorizontalView";
import Row from "./Row";
import { StyleSheet } from "react-native";
import TextInput from "./forms/TextInput";
import { UnitOfMeasurementsEnum } from "../misc/enums";
import useBranchInfo from "../hooks/useBranchInfo";

const WorkOrderProduct = ({
  completing,
  directDrop = false,
  onBlur = () => {},
  onSelected = () => {},
  products,
  workOrderProduct,
  ...otherProps
}) => {
  // state variables-------------
  const [tankSize, setTankSize] = useState(
    workOrderProduct?.tankSize?.toString()
  );
  const [currentPercentage, setCurrentPercentage] = useState(
    workOrderProduct?.currentPercentage?.toString()
  );
  const [quantity, setQuantity] = useState(
    workOrderProduct?.quantity?.toString()
  );
  const [unitOfMeasurement, setUnitOfMeasurement] = useState(
    workOrderProduct?.unitOfMeasurement
  );
  const [productId, setProductId] = useState(workOrderProduct?.productId);
  const [price, setPrice] = useState(workOrderProduct?.price?.toString());
  // state variables-------------

  const { isPetroleumBranch, isPropaneBranch } = useBranchInfo();
  const unitOfMeasurements = completing
    ? Enumerable.from(UnitOfMeasurementsEnum)
        .where((x) => x.value === UnitOfMeasurementsEnum.liters)
        .toArray()
    : Enumerable.from(UnitOfMeasurementsEnum).toArray();
  const sortedProducts = Enumerable.from(products)
    .orderByDescending((x) => x.order !== null)
    .thenBy((x) => x.name)
    .thenBy((x) => x.order)
    .toArray();

  useEffect(() => {
    setTankSize(workOrderProduct?.tankSize?.toString());
    setCurrentPercentage(workOrderProduct?.currentPercentage?.toString());
    setQuantity(workOrderProduct?.quantity?.toString());
    setUnitOfMeasurement(workOrderProduct?.unitOfMeasurement);
    setProductId(workOrderProduct?.productId);
    setPrice(workOrderProduct?.price?.toString());
  }, [workOrderProduct]);

  useEffect(() => {
    onSelected({
      currentPercentage: currentPercentage,
      price: price,
      productId: productId,
      quantity: quantity,
      tankSize: tankSize,
      unitOfMeasurement: unitOfMeasurement,
    });
  }, [
    quantity,
    unitOfMeasurement,
    productId,
    tankSize,
    currentPercentage,
    price,
  ]);

  const validate = () => {
    let isValid = false;

    if (isPetroleumBranch) {
      isValid =
        productId &&
        unitOfMeasurement &&
        (unitOfMeasurement === UnitOfMeasurementsEnum.fillLiters ||
          unitOfMeasurement === UnitOfMeasurementsEnum.fillGallons ||
          quantity > 0);
    }
    if (isPropaneBranch) {
      isValid = quantity > 0 && currentPercentage && unitOfMeasurement;
    }

    return isValid;
  };

  return (
    <HorizontalView style={styles.container}>
      <TextInput
        name="tankSize"
        keyboardType="number-pad"
        onBlur={onBlur}
        onChangeText={(text) => setTankSize(text)}
        placeholder="Tank size"
        style={[styles.control, styles.smallBox]}
        value={tankSize}
        visible={isPropaneBranch}
      />
      <TextInput
        name="currentPercentage"
        keyboardType="number-pad"
        onBlur={onBlur}
        onChangeText={(text) => setCurrentPercentage(text)}
        placeholder="%"
        style={[styles.control, styles.smallBox]}
        value={currentPercentage}
        visible={isPropaneBranch}
      />
      <TextInput
        name="quantity"
        keyboardType="number-pad"
        onBlur={onBlur}
        onChangeText={(text) => setQuantity(text)}
        placeholder={directDrop ? "Litres" : "Qty"}
        style={[styles.control, styles.smallBox]}
        value={quantity}
        visible={isPetroleumBranch}
      />
      <DropdownSelect
        itemLabelProperty="value"
        items={unitOfMeasurements}
        itemValueProperty="value"
        name="unitOfMeasurement"
        onBlur={onBlur}
        onSelectItem={(item) => setUnitOfMeasurement(item?.value)}
        // onSelectItem={(item) => console.log(item)}
        placeholder="Unit"
        selectedValue={unitOfMeasurement}
        style={styles.control}
        title="Unit"
        visible={isPetroleumBranch && !directDrop}
      />
      <DropdownSelect
        itemLabelProperty="shortName"
        items={sortedProducts}
        itemValueProperty="id"
        name="productId"
        onBlur={onBlur}
        onSelectItem={(item) => setProductId(item?.id)}
        placeholder="Product"
        selectedValue={productId}
        style={styles.control}
        title="Product"
        visible={isPetroleumBranch}
      />
      <TextInput
        name="price"
        keyboardType="number-pad"
        onBlur={onBlur}
        onChangeText={(text) => setPrice(text)}
        placeholder="Price (¢)"
        style={[styles.control, styles.smallBox]}
        value={price}
        visible={isPropaneBranch || directDrop}
      />
    </HorizontalView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    marginBottom: 5,
  },
  control: { flex: 1 },
  smallBox: {
    maxWidth: 90,
  },
});

export default WorkOrderProduct;
