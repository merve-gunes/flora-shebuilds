import { ReactNode, useState } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ContactModal from "./ContactModal";
import CartDrawer from "@/components/cart/CartDrawer";

interface SiteLayoutProps {
  children: ReactNode;
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader onContactOpen={() => setIsContactModalOpen(true)} />
      <main className="pt-16">{children}</main>
      <SiteFooter />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <CartDrawer />
    </div>
  );
};

export default SiteLayout;
