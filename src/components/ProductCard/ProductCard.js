import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./ProductCard.style"; // Stil dosyasını içe aktarıyoruz

const ProductCard = ({ product }) => {
  // Ürün bilgilerini prop olarak alıyor
  const renderStockStatus = () => {
    // Stok durumunu kontrol eden fonksiyon
    if (!product.inStock) {
      // Eğer ürün stokta yoksa
      return <Text style={styles.stockStatus}>STOKTA YOK</Text>; // Kullanıcıya bilgi veren bir yazı göster
    }
    return null; // Eğer ürün stoktaysa ekrana hiçbir şey yazdırma
  };

  return (
    <View style={styles.container}>
      {" "}
      {/* Ürün kartının ana konteyneri */}
      <Image source={{ uri: product.imgURL }} style={styles.image} />{" "}
      {/* Ürün görselini göster */}
      <Text style={styles.title}>{product.title}</Text> {/* Ürün başlığı */}
      <Text style={styles.price}>{product.price}</Text> {/* Ürün fiyatı */}
      {renderStockStatus()} {/* Stok durumu yazısını göster (eğer varsa) */}
    </View>
  );
};

export default ProductCard; // Bileşeni dışa aktarıyoruz
