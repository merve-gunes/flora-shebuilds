import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { allProducts } from "@/data/products";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (query.length < 2) return [];
    const lower = query.toLowerCase();
    return allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(lower) ||
        p.category.toLowerCase().includes(lower) ||
        p.desc.toLowerCase().includes(lower)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex flex-col">
      <div className="absolute inset-0 bg-foreground/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-background shadow-2xl w-full max-w-2xl mx-4 sm:mx-auto mt-4 sm:mt-20 rounded-2xl overflow-hidden animate-fade-in">
        <div className="flex items-center gap-3 px-5 py-4 border-b border-border/50">
          <Search size={20} className="text-muted-foreground shrink-0" />
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Çiçek, buket veya kategori ara..."
            className="border-none shadow-none focus-visible:ring-0 text-base bg-transparent h-auto p-0"
          />
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors shrink-0">
            <X size={20} />
          </button>
        </div>

        <div className="max-h-[50vh] overflow-y-auto">
          {query.length >= 2 && results.length === 0 && (
            <div className="p-8 text-center text-muted-foreground">
              "{query}" için sonuç bulunamadı
            </div>
          )}
          {results.map((product) => (
            <Link
              key={product.id}
              to={`/urun/${product.id}`}
              onClick={onClose}
              className="flex items-center gap-4 px-5 py-3 hover:bg-secondary/30 transition-colors"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 object-cover rounded-lg shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{product.name}</p>
                <p className="text-xs text-muted-foreground">{product.category}</p>
              </div>
              <span className="text-sm font-semibold text-primary shrink-0">{product.price}</span>
            </Link>
          ))}
          {query.length < 2 && (
            <div className="p-6 text-center text-muted-foreground text-sm">
              Aramak için en az 2 karakter yazın
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
