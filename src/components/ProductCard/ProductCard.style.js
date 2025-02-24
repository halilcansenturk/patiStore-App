import { StyleSheet, Dimensions } from "react-native";
// StyleSheet: Stil oluşturmak için kullanılır
// Dimensions: Ekran boyutlarını almak için kullanılır

export default StyleSheet.create({
  container: {
    flex: 1, // Bulunduğu alanı tamamen kaplamasını sağlar
    backgroundColor: "#F0F0F0", // Açık gri arka plan rengi
    padding: 10, // İç boşluk ekler
    margin: 10, // Dış boşluk ekler
    borderRadius: 10, // Kenarları yuvarlak yapar
  },

  image: {
    backgroundColor: "white", // Arka plan rengi beyaz
    height: Dimensions.get("window").height / 4, // Resim yüksekliğini ekranın 1/4'ü kadar yapar
    borderRadius: 15, // Kenarları yuvarlak yapar
    resizeMode: "contain", // Resmin oranını koruyarak sığdırır
  },

  title: {
    fontSize: 20, // Yazı boyutunu belirler
    fontWeight: "bold", // Yazıyı kalın yapar
    margin: 5, // Kenarlardan boşluk bırakır
    marginBottom: 3, // Alt kısımda ekstra boşluk bırakır
  },

  price: {
    color: "gray", // Yazı rengini gri yapar
    fontSize: 15, // Yazı boyutunu belirler
    fontWeight: "bold", // Yazıyı kalın yapar
    marginTop: 3, // Üstten boşluk bırakır
    margin: 5, // Kenarlardan boşluk bırakır
  },

  stockStatus: {
    fontWeight: 900, // Yazıyı ekstra kalın yapar
    fontSize: 20, // Yazı boyutunu belirler
    textAlign: "left", // Yazıyı sola hizalar
    color: "red", // Yazı rengini kırmızı yapar (stok durumu için dikkat çekici)
    margin: 5, // Kenarlardan boşluk bırakır
  },
});
