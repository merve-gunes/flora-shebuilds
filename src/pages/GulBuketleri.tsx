import CategoryTemplate from "@/components/category/CategoryTemplate";
import gulBuketleri from "@/assets/gul-buketleri.jpg";

const products = [
  { name: "Kırmızı Aşk Buketi", price: "₺850", desc: "51 adet premium kırmızı gül, saten kurdele ve özel ambalajda" },
  { name: "Beyaz Zarafet", price: "₺700", desc: "25 adet beyaz gül, okaliptüs ve lavanta dallarıyla" },
  { name: "Pembe Şefkat", price: "₺620", desc: "30 adet pembe ve açık pembe gül, yeşillik detaylarıyla" },
  { name: "Tutkulu Karışım", price: "₺950", desc: "Kırmızı, bordo ve koyu pembe güllerin dramtik uyumu, 40 dal" },
  { name: "Pastel Rüya", price: "₺580", desc: "Somon, şeftali ve krem rengi güller, rustik jüt ambalajda" },
  { name: "Tek Dal Özel", price: "₺150", desc: "Kadife kutuda tek dal ithal ekvator gülü, kişiye özel not kartıyla" },
  { name: "Gül & Çikolata Seti", price: "₺1100", desc: "12 kırmızı gül ve el yapımı Belçika çikolatası hediye kutusu" },
  { name: "Bahçe Gülleri", price: "₺750", desc: "David Austin bahçe gülleri, lavanta ve cipsolarla doğal buket" },
  { name: "Romantik Sepet", price: "₺1250", desc: "Hasır sepette 60 adet karışık renk gül aranjmanı" },
];

const GulBuketleri = () => (
  <CategoryTemplate
    title="Gül Buketleri"
    subtitle="Aşkın ve tutkunun simgesi, özenle hazırlanmış gül buketlerimiz"
    heroImage={gulBuketleri}
    products={products}
  />
);

export default GulBuketleri;
