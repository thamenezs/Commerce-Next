import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-screen h-screen bg-white">
      <Navbar />
      <div className="flex flex-col mt-[88px]">
        <AboutSection />
        <ProductsSection />
      </div>
    </main>
  );
}
