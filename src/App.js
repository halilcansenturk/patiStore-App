import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import productList from "./productList.json";
import ProductCard from "./components/ProductCard";

export default function App() {
  const renderProduct = ({ item }) => <ProductCard product={item} />;
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent={false} //barın altına hizalanıyor
        backgroundColor="transparent"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={productList}
          renderItem={renderProduct}
          numColumns={2}
        ></FlatList>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
