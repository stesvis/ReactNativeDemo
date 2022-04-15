import { DropdownSelect, TextInput } from "./forms";
import React, { useEffect, useState } from "react";

import Enumerable from "linq";
import Row from "./Row";
import { StyleSheet } from "react-native";

const TruckProduct = ({
  completing,
  onBlur = () => {},
  onSelected = () => {},
  products,
  truckProduct,
  ...otherProps
}) => {
  // state variables-------------
  const [totalLoad, setTotalLoad] = useState(
    truckProduct?.totalLoad?.toString()
  );
  const [currentLoad, setCurrentLoad] = useState(
    truckProduct?.currentLoad?.toString()
  );
  const [productId, setProductId] = useState(truckProduct?.productId);
  // state variables-------------

  const sortedProducts = Enumerable.from(products)
    .orderByDescending((x) => x.order !== null)
    .thenBy((x) => x.name)
    .thenBy((x) => x.order)
    .toArray();

  useEffect(() => {
    setTotalLoad(truckProduct?.totalLoad?.toString());
    setCurrentLoad(truckProduct?.currentLoad?.toString());
    setProductId(truckProduct?.productId);
  }, [truckProduct]);

  useEffect(() => {
    onSelected({
      totalLoad: totalLoad,
      currentLoad: currentLoad,
      productId: productId,
    });
  }, [totalLoad, currentLoad, productId]);

  return (
    <Row style={styles.container}>
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
      />
      <TextInput
        name="totalLoad"
        keyboardType="number-pad"
        onBlur={onBlur}
        onChangeText={(text) => setTotalLoad(text)}
        placeholder="Total load"
        style={[styles.control, styles.smallBox]}
        value={totalLoad}
      />
      <TextInput
        name="currentLoad"
        keyboardType="number-pad"
        onBlur={onBlur}
        onChangeText={(text) => setCurrentLoad(text)}
        placeholder="Current load"
        style={[styles.control, styles.smallBox]}
        value={currentLoad}
      />
    </Row>
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

export default TruckProduct;
