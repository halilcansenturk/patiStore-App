import React, { useState } from "react";
import {
  FlatList, // Listeleme için kullanılır, performans açısından ScrollView'dan daha verimlidir
  StyleSheet, // Stil oluşturmak için kullanılır
  View, // Genel kapsayıcı bileşen
  StatusBar,
  ScrollView,
  Text, // Metin göstermek için kullanılır
  TextInput, // Kullanıcıdan metin girdisi almak için kullanılır
} from "react-native";

import productList from "./productList.json"; // Ürün listesini JSON dosyasından içe aktarıyoruz
import ProductCard from "./components/ProductCard"; // Ürünleri göstermek için ayrı bir bileşen kullanıyoruz

export default function App() {
  // Ürünleri listeleme fonksiyonu, her bir ürünü ProductCard bileşeni ile oluşturur
  const renderProduct = ({ item }) => <ProductCard product={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.logo}> PATIKASTORE</Text>
      <TextInput style={styles.textInput} placeholder="Ara..." />
      <StatusBar // Uygulama üst kısmındaki durum çubuğunu kontrol etmek için kullanılır
        barStyle="dark-content" // Durum çubuğunun içeriğini koyu renk yapar
        translucent={false} // Barın altına hizalanmasını engeller
        backgroundColor="transparent" // Arka planı şeffaf yapar
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Dikeyde scrollun gözükmemesini sağlar */}
        <FlatList
          keyExtractor={(item) => item.id.toString()} // Her öğeye benzersiz bir anahtar atar
          data={productList} // FlatList'e veriyi aktarıyoruz
          renderItem={renderProduct} // Her öğeyi renderProduct fonksiyonu ile oluşturuyoruz
          numColumns={2} // Ürünleri iki sütunlu olarak düzenler
        />
      </ScrollView>
    </View>
  );
}

// Stil tanımlamaları
const styles = StyleSheet.create({
  container: {
    flex: 1, // Tüm ekranı kaplamasını sağlar
    backgroundColor: "white", // Arka plan rengi beyaz
  },

  logo: {
    marginTop: 15, // Üstten boşluk bırakır
    marginLeft: 5, // Soldan boşluk bırakır
    fontSize: 30, // Yazı boyutu
    fontWeight: "900", // Yazı kalınlığı
    color: "purple", // Yazı rengi
  },

  textInput: {
    margin: 10, // Kenarlardan boşluk bırakır
    padding: 10, // İç boşluk ekler
    borderRadius: 10, // Kenarları yuvarlak yapar
    backgroundColor: "#F0F0F0", // Arka plan rengi
    color: "black", // Yazı rengi
    fontWeight: "bold", // Yazıyı kalın yapar
  },
});
