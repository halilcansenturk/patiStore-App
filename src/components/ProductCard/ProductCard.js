import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./ProductCard.style";

const ProductCard = ({ product }) => {
  const renderStockStatus = () => {
    if (!product.inStock) {
      return <Text style={styles.stockStatus}>STOKTA YOK</Text>;
    }
    return null; // Stokta varsa hiç şey döndürme
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imgURL }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      {renderStockStatus()}
    </View>
  );
};

export default ProductCard;
