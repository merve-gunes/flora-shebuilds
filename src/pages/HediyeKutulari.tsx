import CategoryTemplate from "@/components/category/CategoryTemplate";
import hediyeKutusu from "@/assets/hediye-kutusu.jpg";
import hediyeLuks from "@/assets/hediye-luks.jpg";
import hediyeCikolata from "@/assets/hediye-cikolata.jpg";
import hediyeMini from "@/assets/hediye-mini.jpg";

const products = [
  { name: "Lüks Hediye Kutusu", price: "₺750", desc: "Güller, çikolata ve özel not kartı ile premium set", image: hediyeLuks },
  { name: "Çikolatalı Set", price: "₺650", desc: "Mevsim çiçekleri ve el yapımı çikolata hediye paketi", image: hediyeCikolata },
  { name: "Mini Sürpriz", price: "₺400", desc: "Küçük ama etkili, zarif kutuda mini buket ve hediye", image: hediyeMini },
  { name: "Spa & Çiçek Seti", price: "₺850", desc: "Çiçek buketi, mum ve spa ürünleri bir arada", image: hediyeLuks },
  { name: "Doğum Günü Paketi", price: "₺700", desc: "Renkli çiçekler, balon ve pasta kuponuyla özel paket", image: hediyeMini },
  { name: "Anneler Günü Seti", price: "₺600", desc: "Pastel çiçekler ve kişiye özel hediyelerle dolu kutu", image: hediyeCikolata },
];

const HediyeKutulari = () => (
  <CategoryTemplate
    title="Hediye Kutuları"
    subtitle="Çiçek ve lezzetlerin bir arada olduğu özel hediye setleri"
    heroImage={hediyeKutusu}
    products={products}
  />
);

export default HediyeKutulari;
