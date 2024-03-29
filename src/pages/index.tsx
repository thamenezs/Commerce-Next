import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import FriendsSection from "@/components/FriendsSection";
import AdressSection from "@/components/AdressSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Navbar />
      <div className="flex flex-col mt-[88px]">
        <AboutSection />
        <ProductsSection />
        <FriendsSection />
        <AdressSection />
        <ContactSection />
      </div>
    </main>
  );
}
