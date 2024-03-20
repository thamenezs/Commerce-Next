import Link from "next/link";
import Carousel from "./Carousel";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="grid sm:grid-cols-2 grid-cols-1 place-items-stretch h-screen sm:h-full">
        <div className="bg-white">
          <Carousel />
        </div>
        <div className="bg-white relative">
          <div className="flex flex-col items-start gap-6 absolute bottom-32 sm:bottom-8 left-10 right-6">
            <p className="tracking-widest text-xl font-montserrat-light text-[#C4C4C4]">
              #EstéticaAvançada
            </p>
            <div className="flex flex-row">
              <h1 className="tracking-wide text-4xl sm:text-6xl font-bold text-black">
                Torne-se ainda <span className="text-[#1DCF9D]"> melhor hoje</span> 
              </h1>
            </div>
            <span className="text-lg font-montserrat text-black">
            Consulte-nos para conhecer os serviçoes que atendem às suas necessidades
            </span>
            <button className="text-lg bg-[#262626] text-white px-[28px] py-[16px] hover:bg-slate-700">
              <Link
                href={
                  "https://api.whatsapp.com/send?phone=553175077925&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20est%C3%A9tica%20avan%C3%A7ada%20:)"
                }
              target="_blank"
              >
                Quero Marcar!
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
