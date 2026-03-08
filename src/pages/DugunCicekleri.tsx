import CategoryTemplate from "@/components/category/CategoryTemplate";
import dugunCicekleri from "@/assets/dugun-cicekleri.jpg";
import dugunGelinBuketi from "@/assets/dugun-gelin-buketi.jpg";
import dugunMasa from "@/assets/dugun-masa.jpg";
import dugunKapiSusu from "@/assets/dugun-kapi-susu.jpg";

const products = [
  { name: "Gelin Buketi", price: "₺850", desc: "Beyaz güller ve okaliptüs ile klasik gelin buketi", image: dugunGelinBuketi },
  { name: "Masa Aranjmanı", price: "₺450", desc: "Düğün masaları için zarif çiçek aranjmanı", image: dugunMasa },
  { name: "Kapı Süsü", price: "₺350", desc: "Mekan girişi için dekoratif çiçek süslemesi", image: dugunKapiSusu },
  { name: "Çiçek Kemeri", price: "₺1200", desc: "Nikah töreni için çiçek kemeri dekorasyonu", image: dugunKapiSusu },
  { name: "Yaka Çiçeği", price: "₺150", desc: "Damat ve sağdıçlar için zarif yaka çiçeği", image: dugunGelinBuketi },
  { name: "Gelin Arabası", price: "₺600", desc: "Gelin arabası çiçek süslemesi", image: dugunMasa },
];

const DugunCicekleri = () => (
  <CategoryTemplate
    title="Düğün Çiçekleri"
    subtitle="Hayatınızın en özel gününe yakışır düğün aranjmanları"
    heroImage={dugunCicekleri}
    products={products}
  />
);

export default DugunCicekleri;
