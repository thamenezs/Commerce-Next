import Image from "next/image";
import Maps from "./Maps";

export default function AdressSection() {
  return (
    <section id="adress">
      <div className="w-full h-[700px] md:h-96 bg-slate-100 p-2 lg:p-16 mb-28">
        <div className="font-montserrat font-semibold text-center text-4xl">
          Our Location
        </div>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 place-items-stretch">
        <div className="flex flex-col font-montserrat justify-center items-left px-28">
            <Image src={"/location.png"} alt={"Location Pin"} width={40} height={40} className="hidden md:block mb-16" quality={100}/>
            <p className="text-[#1DCF9D] font-semibold text-3xl">R. Helga Taveira de Souza, xx</p>
            <p className="text-2xl font-thin">Belo Horizonte/MG</p>
        </div>
        <div className="flex justify-center">
          <Maps />
        </div>
        </div>
      </div>
    </section>
  );
}
