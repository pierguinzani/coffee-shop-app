import React from "react";
import { FlatList as NBFlatList } from "native-base";
import { ProductItem } from "@components/ProductItem";
import { ProductItemList } from "src/types/ProductItemProps";

export default function ProductList({ items }: ProductItemList) {
  return (
    <NBFlatList
      data={items}
      renderItem={ProductItem}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      width="100%"
      height="70%"
      flexGrow={0}
      marginBottom={4}
    />
  );
}
