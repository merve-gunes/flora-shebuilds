import { useState } from "react";
import { Smile, Leaf, Heart, Zap, RotateCcw } from "lucide-react";
import lavantaImg from "@/assets/lavanta.jpg";
import aycicegiImg from "@/assets/aycicegi.jpg";
import gulKirmiziImg from "@/assets/gul-kirmizi-ask.jpg";
import laleImg from "@/assets/lale.jpg";

type Mood = "mutlu" | "huzurlu" | "romantik" | "motivasyon";

interface FlowerResult {
  flower: string;
  tagline: string;
  description: string;
  image: string;
  color: string;
  gradient: string;
}

const moodData: Record<Mood, FlowerResult> = {
  mutlu: {
    flower: "Ayçiçeği",
    tagline: "Güneşin enerjisini taşır.",
    description: "Ayçiçeği, neşe ve pozitif enerjiyi simgeler. Tıpkı senin bugünkü ruh halin gibi parlak ve sıcak.",
    image: aycicegiImg,
    color: "text-amber-500",
    gradient: "from-amber-400/20 via-yellow-300/10 to-orange-400/20",
  },
  huzurlu: {
    flower: "Lavanta",
    tagline: "Aromasıyla sakinlik ve huzur hissi verir.",
    description: "Lavanta, doğanın en sakinleştirici armağanıdır. Mis gibi kokusuyla zihni dinlendirir, kalbi ferahlatır.",
    image: lavantaImg,
    color: "text-purple-500",
    gradient: "from-purple-400/20 via-violet-300/10 to-indigo-400/20",
  },
  romantik: {
    flower: "Kırmızı Gül",
    tagline: "Aşkın zamansız sembolü.",
    description: "Kırmızı gül, yüzyıllardır derin aşkı ve tutkuyu temsil eder. Kalbindeki sevgiyi en güzel şekilde ifade eder.",
    image: gulKirmiziImg,
    color: "text-rose-500",
    gradient: "from-rose-400/20 via-pink-300/10 to-red-400/20",
  },
  motivasyon: {
    flower: "Lale",
    tagline: "Yeni başlangıçların çiçeği.",
    description: "Lale, kararlılığı ve yeniden doğuşu simgeler. Her sabah güneşe dönen yapraklarıyla sana ilham verir.",
    image: laleImg,
    color: "text-orange-500",
    gradient: "from-orange-400/20 via-red-300/10 to-amber-400/20",
  },
};

const moods: { key: Mood; label: string; emoji: string; icon: React.ReactNode }[] = [
  { key: "mutlu", label: "Mutlu", emoji: "😊", icon: <Smile size={24} strokeWidth={1.5} /> },
  { key: "huzurlu", label: "Huzurlu", emoji: "🌿", icon: <Leaf size={24} strokeWidth={1.5} /> },
  { key: "romantik", label: "Romantik", emoji: "💗", icon: <Heart size={24} strokeWidth={1.5} /> },
  { key: "motivasyon", label: "Motivasyona ihtiyacım var", emoji: "⚡", icon: <Zap size={24} strokeWidth={1.5} /> },
];

const MoodFlowerQuiz = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [isRevealing, setIsRevealing] = useState(false);

  const handleSelect = (mood: Mood) => {
    setIsRevealing(true);
    setTimeout(() => {
      setSelectedMood(mood);
      setIsRevealing(false);
    }, 600);
  };

  const handleReset = () => {
    setSelectedMood(null);
  };

  const result = selectedMood ? moodData[selectedMood] : null;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {!selectedMood && !isRevealing ? (
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="font-display text-xl sm:text-2xl text-foreground mb-2">
              Bugün nasıl hissediyorsun?
            </h3>
            <p className="text-foreground/50 text-sm">Ruh haline uygun çiçeğini keşfet</p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {moods.map((mood) => (
              <button
                key={mood.key}
                onClick={() => handleSelect(mood.key)}
                className="group relative bg-card rounded-2xl p-5 sm:p-6 text-center card-shadow transition-all duration-500 hover:-translate-y-2 hover:shadow-xl border border-border/50 hover:border-primary/30 cursor-pointer"
              >
                <span className="text-3xl sm:text-4xl mb-3 block transition-transform duration-300 group-hover:scale-125">
                  {mood.emoji}
                </span>
                <p className="text-foreground font-medium text-sm sm:text-base">{mood.label}</p>
              </button>
            ))}
          </div>
        </div>
      ) : isRevealing ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto animate-pulse">
              <span className="text-3xl">🌸</span>
            </div>
            <p className="text-foreground/60 text-sm animate-pulse">Çiçeğin bulunuyor...</p>
          </div>
        </div>
      ) : result ? (
        <div className="animate-fade-in">
          <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${result.gradient} border border-border/30`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-56 sm:h-80">
                <img
                  src={result.image}
                  alt={result.flower}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/20 hidden sm:block" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <span className="text-xs tracking-[0.2em] uppercase text-primary mb-2 block">Senin çiçeğin</span>
                <h3 className="font-display text-2xl sm:text-3xl text-foreground mb-2">
                  {result.flower}
                </h3>
                <p className={`text-sm font-medium ${result.color} mb-4 italic`}>
                  "{result.tagline}"
                </p>
                <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                  {result.description}
                </p>
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors self-start group"
                >
                  <RotateCcw size={14} className="group-hover:-rotate-180 transition-transform duration-500" />
                  Tekrar dene
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MoodFlowerQuiz;
