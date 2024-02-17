import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <main className="container bg-white">
      <Navbar />
      <div className="flex flex-col mt-[88px]">
        <AboutSection />
        <ProductsSection />
      </div>
    </main>
  );
}
