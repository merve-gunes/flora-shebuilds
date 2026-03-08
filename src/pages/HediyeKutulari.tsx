import CategoryTemplate from "@/components/category/CategoryTemplate";
import hediyeKutusu from "@/assets/hediye-kutusu.jpg";

const products = [
  { name: "Lüks Hediye Kutusu", price: "₺750", desc: "Güller, çikolata ve özel not kartı ile premium set" },
  { name: "Çikolatalı Set", price: "₺650", desc: "Mevsim çiçekleri ve el yapımı çikolata hediye paketi" },
  { name: "Mini Sürpriz", price: "₺400", desc: "Küçük ama etkili, zarif kutuda mini buket ve hediye" },
  { name: "Spa & Çiçek Seti", price: "₺850", desc: "Çiçek buketi, mum ve spa ürünleri bir arada" },
  { name: "Doğum Günü Paketi", price: "₺700", desc: "Renkli çiçekler, balon ve pasta kuponuyla özel paket" },
  { name: "Anneler Günü Seti", price: "₺600", desc: "Pastel çiçekler ve kişiye özel hediyelerle dolu kutu" },
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
