import gulRomantik from "@/assets/gul-romantik.jpg";
import gulKirmiziAsk from "@/assets/gul-kirmizi-ask.jpg";
import gulPembeRuya from "@/assets/gul-pembe-ruya.jpg";
import orkideMor from "@/assets/orkide-mor.jpg";
import orkideBeyaz from "@/assets/orkide-beyaz.jpg";
import orkidePembe from "@/assets/orkide-pembe.jpg";
import dugunGelinBuketi from "@/assets/dugun-gelin-buketi.jpg";
import dugunMasa from "@/assets/dugun-masa.jpg";
import dugunKapiSusu from "@/assets/dugun-kapi-susu.jpg";
import hediyeLuks from "@/assets/hediye-luks.jpg";
import hediyeCikolata from "@/assets/hediye-cikolata.jpg";
import hediyeMini from "@/assets/hediye-mini.jpg";
import gulBuketleri from "@/assets/gul-buketleri.jpg";
import orkideImage from "@/assets/orkide.jpg";
import dugunCicekleri from "@/assets/dugun-cicekleri.jpg";
import hediyeKutusu from "@/assets/hediye-kutusu.jpg";
import nergisImage from "@/assets/nergis.jpg";
import laleImage from "@/assets/lale.jpg";
import papatyaImage from "@/assets/papatya.jpg";
import niluferImage from "@/assets/nilufer.jpg";
import aycicegiImage from "@/assets/aycicegi.jpg";
import lavantaImage from "@/assets/lavanta.jpg";

export interface Product {
  id: string;
  name: string;
  price: string;
  desc: string;
  image: string;
  category: string;
  categorySlug: string;
  details?: string[];
}

export const allProducts: Product[] = [
  // Gül Buketleri
  {
    id: "gul-kirmizi",
    name: "Kırmızı Gül Buketi",
    price: "₺850",
    desc: "51 adet premium kırmızı gül, saten kurdele ve özel ambalajda",
    image: gulKirmiziAsk,
    category: "Gül Buketleri",
    categorySlug: "/gul-buketleri",
    details: ["51 adet ithal kırmızı gül", "Saten kurdele detay", "Özel tasarım ambalaj", "Taze çiçek garantisi", "Ücretsiz not kartı"],
  },
  {
    id: "gul-beyaz-zarafet",
    name: "Beyaz Zarafet",
    price: "₺700",
    desc: "25 adet beyaz gül, okaliptüs ve lavanta dallarıyla",
    image: gulPembeRuya,
    category: "Gül Buketleri",
    categorySlug: "/gul-buketleri",
    details: ["25 adet beyaz gül", "Okaliptüs dalları", "Lavanta detay", "Doğal jüt ambalaj"],
  },
  {
    id: "gul-pembe-sefkat",
    name: "Pembe Şefkat",
    price: "₺620",
    desc: "30 adet pembe ve açık pembe gül, yeşillik detaylarıyla",
    image: gulPembeRuya,
    category: "Gül Buketleri",
    categorySlug: "/gul-buketleri",
    details: ["30 adet pembe gül karışımı", "Mevsimsel yeşillik", "Kraft ambalaj", "Aynı gün teslimat"],
  },
  {
    id: "gul-tutkulu-karisim",
    name: "Tutkulu Karışım",
    price: "₺950",
    desc: "Kırmızı, bordo ve koyu pembe güllerin dramatik uyumu, 40 dal",
    image: gulKirmiziAsk,
    category: "Gül Buketleri",
    categorySlug: "/gul-buketleri",
    details: ["40 dal karışık gül", "Kırmızı, bordo ve koyu pembe", "Premium ambalaj", "Taze çiçek garantisi"],
  },
  {
    id: "gul-pastel-ruya",
    name: "Pastel Rüya",
    price: "₺580",
    desc: "Somon, şeftali ve krem rengi güller, rustik jüt ambalajda",
    image: gulRomantik,
    category: "Gül Buketleri",
    categorySlug: "/gul-buketleri",
    details: ["Pastel renk güller", "Rustik jüt ambalaj", "Doğal yeşillik", "Kişiye özel not kartı"],
  },
  {
    id: "gul-tek-dal",
    name: "Tek Dal Özel",
    price: "₺150",
    desc: "Kadife kutuda tek dal ithal ekvator gülü, kişiye özel not kartıyla",
    image: gulRomantik,
    category: "Gül Buketleri",
    categorySlug: "/gul-buketleri",
    details: ["Tek dal ithal ekvator gülü", "Kadife kutu", "Kişiye özel not kartı"],
  },
  {
    id: "gul-cikolata-seti",
    name: "Gül & Çikolata Seti",
    price: "₺1100",
    desc: "12 kırmızı gül ve el yapımı Belçika çikolatası hediye kutusu",
    image: gulKirmiziAsk,
    category: "Gül Buketleri",
    categorySlug: "/gul-buketleri",
    details: ["12 kırmızı gül", "El yapımı Belçika çikolatası", "Premium hediye kutusu", "Ücretsiz kargo"],
  },
  {
    id: "gul-bahce",
    name: "Bahçe Gülleri",
    price: "₺750",
    desc: "David Austin bahçe gülleri, lavanta ve cipsolarla doğal buket",
    image: gulPembeRuya,
    category: "Gül Buketleri",
    categorySlug: "/gul-buketleri",
    details: ["David Austin bahçe gülleri", "Lavanta dalları", "Doğal buket tasarımı"],
  },
  {
    id: "gul-romantik-sepet",
    name: "Romantik Sepet",
    price: "₺1250",
    desc: "Hasır sepette 60 adet karışık renk gül aranjmanı",
    image: gulRomantik,
    category: "Gül Buketleri",
    categorySlug: "/gul-buketleri",
    details: ["60 adet karışık renk gül", "El örgüsü hasır sepet", "Premium aranjman", "Ücretsiz kargo"],
  },

  // Orkideler
  {
    id: "orkide-mavi",
    name: "Mavi Orkide",
    price: "₺890",
    desc: "Nadir mavi phalaenopsis orkide, mat beyaz seramik saksıda",
    image: orkideMor,
    category: "Orkideler",
    categorySlug: "/orkideler",
    details: ["Nadir mavi phalaenopsis", "Mat beyaz seramik saksı", "Bakım kılavuzu dahil", "Uzun ömürlü"],
  },
  {
    id: "orkide-beyaz-cift",
    name: "Beyaz Çift Dallı",
    price: "₺780",
    desc: "Çift dallı beyaz orkide, şık gümüş detaylı saksıda",
    image: orkideBeyaz,
    category: "Orkideler",
    categorySlug: "/orkideler",
    details: ["Çift dallı beyaz orkide", "Gümüş detaylı saksı", "Uzun çiçeklenme süresi"],
  },
  {
    id: "orkide-mor-imparator",
    name: "Mor İmparator",
    price: "₺720",
    desc: "Tek dallı mor vanda orkide, cam vazo içinde",
    image: orkideMor,
    category: "Orkideler",
    categorySlug: "/orkideler",
    details: ["Mor vanda orkide", "Şeffaf cam vazo", "Dekoratif taşlar dahil"],
  },
  {
    id: "orkide-pembe-prenses",
    name: "Pembe Prenses",
    price: "₺650",
    desc: "Pembe phalaenopsis, yosun ve dekoratif taşlarla süslenmiş",
    image: orkidePembe,
    category: "Orkideler",
    categorySlug: "/orkideler",
    details: ["Pembe phalaenopsis", "Doğal yosun", "Dekoratif taşlar", "Seramik saksı"],
  },
  {
    id: "orkide-mini-uclu",
    name: "Mini Orkide Üçlüsü",
    price: "₺950",
    desc: "3 farklı renk mini orkide, ahşap tepsi üzerinde set",
    image: orkideBeyaz,
    category: "Orkideler",
    categorySlug: "/orkideler",
    details: ["3 farklı renk mini orkide", "Ahşap sunum tepsisi", "Dekoratif set"],
  },
  {
    id: "orkide-sari-gunes",
    name: "Sarı Güneş",
    price: "₺680",
    desc: "Sarı oncidium orkide, hasır detaylı toprak saksıda",
    image: orkidePembe,
    category: "Orkideler",
    categorySlug: "/orkideler",
    details: ["Sarı oncidium orkide", "Hasır detaylı saksı", "Bakım kartı dahil"],
  },
  {
    id: "orkide-sukulent",
    name: "Orkide & Sukulent Seti",
    price: "₺1100",
    desc: "Beyaz orkide ve sukulent aranjmanı, beton saksıda",
    image: orkideBeyaz,
    category: "Orkideler",
    categorySlug: "/orkideler",
    details: ["Beyaz orkide", "Karışık sukulentler", "Modern beton saksı"],
  },
  {
    id: "orkide-dev-beyaz",
    name: "Dev Beyaz Orkide",
    price: "₺1350",
    desc: "Üç dallı jumbo beyaz orkide, lüks siyah saksıda",
    image: orkideBeyaz,
    category: "Orkideler",
    categorySlug: "/orkideler",
    details: ["Üç dallı jumbo orkide", "Lüks siyah saksı", "Premium ambalaj"],
  },
  {
    id: "orkide-cattleya",
    name: "Cattleya Orkide",
    price: "₺1500",
    desc: "Nadir cattleya türü orkide, koleksiyoncular için özel seri",
    image: orkideMor,
    category: "Orkideler",
    categorySlug: "/orkideler",
    details: ["Nadir cattleya türü", "Koleksiyon serisi", "Özel bakım kılavuzu"],
  },

  // Düğün Çiçekleri
  {
    id: "dugun-gelin-buketi",
    name: "Gelin Buketi",
    price: "₺850",
    desc: "Beyaz güller ve okaliptüs ile klasik gelin buketi",
    image: dugunGelinBuketi,
    category: "Düğün Çiçekleri",
    categorySlug: "/dugun-cicekleri",
    details: ["Beyaz güller", "Okaliptüs dalları", "Saten kurdele", "Gelin fotoğrafı için ideal"],
  },
  {
    id: "dugun-masa-aranjmani",
    name: "Masa Aranjmanı",
    price: "₺450",
    desc: "Düğün masaları için zarif çiçek aranjmanı",
    image: dugunMasa,
    category: "Düğün Çiçekleri",
    categorySlug: "/dugun-cicekleri",
    details: ["Mevsim çiçekleri", "Zarif aranjman", "Masa boyutuna uygun", "Minimum 10 adet sipariş"],
  },
  {
    id: "dugun-kapi-susu",
    name: "Kapı Süsü",
    price: "₺350",
    desc: "Mekan girişi için dekoratif çiçek süslemesi",
    image: dugunKapiSusu,
    category: "Düğün Çiçekleri",
    categorySlug: "/dugun-cicekleri",
    details: ["Dekoratif çiçek süsleme", "Mekan girişine uygun", "Kurulum dahil"],
  },
  {
    id: "dugun-cicek-kemeri",
    name: "Çiçek Kemeri",
    price: "₺1200",
    desc: "Nikah töreni için çiçek kemeri dekorasyonu",
    image: dugunKapiSusu,
    category: "Düğün Çiçekleri",
    categorySlug: "/dugun-cicekleri",
    details: ["Çiçek kemeri dekorasyonu", "Kurulum ve söküm dahil", "Fotoğraf çekimi için ideal"],
  },
  {
    id: "dugun-yaka-cicegi",
    name: "Yaka Çiçeği",
    price: "₺150",
    desc: "Damat ve sağdıçlar için zarif yaka çiçeği",
    image: dugunGelinBuketi,
    category: "Düğün Çiçekleri",
    categorySlug: "/dugun-cicekleri",
    details: ["Zarif yaka çiçeği", "İğne ile sabitleme", "Minimum 3 adet sipariş"],
  },
  {
    id: "dugun-gelin-arabasi",
    name: "Gelin Arabası",
    price: "₺600",
    desc: "Gelin arabası çiçek süslemesi",
    image: dugunMasa,
    category: "Düğün Çiçekleri",
    categorySlug: "/dugun-cicekleri",
    details: ["Araba süslemesi", "Kurulum dahil", "Fiyonk ve kurdele detay"],
  },

  // Hediye Kutuları
  {
    id: "hediye-luks",
    name: "Lüks Hediye Kutusu",
    price: "₺750",
    desc: "Güller, çikolata ve özel not kartı ile premium set",
    image: hediyeLuks,
    category: "Hediye Kutuları",
    categorySlug: "/hediye-kutulari",
    details: ["Premium güller", "El yapımı çikolata", "Özel not kartı", "Lüks kutu ambalaj"],
  },
  {
    id: "hediye-cikolata",
    name: "Çikolatalı Set",
    price: "₺650",
    desc: "Mevsim çiçekleri ve el yapımı çikolata hediye paketi",
    image: hediyeCikolata,
    category: "Hediye Kutuları",
    categorySlug: "/hediye-kutulari",
    details: ["Mevsim çiçekleri", "El yapımı çikolata", "Hediye paketi"],
  },
  {
    id: "hediye-mini",
    name: "Mini Sürpriz",
    price: "₺400",
    desc: "Küçük ama etkili, zarif kutuda mini buket ve hediye",
    image: hediyeMini,
    category: "Hediye Kutuları",
    categorySlug: "/hediye-kutulari",
    details: ["Mini buket", "Sürpriz hediye", "Zarif kutu"],
  },
  {
    id: "hediye-spa",
    name: "Spa & Çiçek Seti",
    price: "₺850",
    desc: "Çiçek buketi, mum ve spa ürünleri bir arada",
    image: hediyeLuks,
    category: "Hediye Kutuları",
    categorySlug: "/hediye-kutulari",
    details: ["Çiçek buketi", "Aromatik mum", "Spa ürünleri", "Premium kutu"],
  },
  {
    id: "hediye-dogum-gunu",
    name: "Doğum Günü Paketi",
    price: "₺700",
    desc: "Renkli çiçekler, balon ve pasta kuponuyla özel paket",
    image: hediyeMini,
    category: "Hediye Kutuları",
    categorySlug: "/hediye-kutulari",
    details: ["Renkli çiçekler", "Balon", "Pasta kuponu", "Doğum günü kartı"],
  },
  {
    id: "hediye-anneler-gunu",
    name: "Anneler Günü Seti",
    price: "₺600",
    desc: "Pastel çiçekler ve kişiye özel hediyelerle dolu kutu",
    image: hediyeCikolata,
    category: "Hediye Kutuları",
    categorySlug: "/hediye-kutulari",
    details: ["Pastel çiçekler", "Kişiye özel hediyeler", "Anneler günü kartı"],
  },
];

// Helper functions
export const getProductById = (id: string) => allProducts.find((p) => p.id === id);
export const getProductsByCategory = (categorySlug: string) =>
  allProducts.filter((p) => p.categorySlug === categorySlug);

// Hero images for category pages
export const categoryHeroImages: Record<string, string> = {
  "/gul-buketleri": gulBuketleri,
  "/orkideler": orkideImage,
  "/dugun-cicekleri": dugunCicekleri,
  "/hediye-kutulari": hediyeKutusu,
};

export const categoryNames: Record<string, string> = {
  "/gul-buketleri": "Gül Buketleri",
  "/orkideler": "Orkideler",
  "/dugun-cicekleri": "Düğün Çiçekleri",
  "/hediye-kutulari": "Hediye Kutuları",
};
