import Image from "next/image";
import Maps from "./Maps";

export default function AdressSection() {
  return (
    <section id="adress">
      <div className="w-full h-full bg-[#D8D8D8] py-4">
        <div className="font-montserrat font-semibold text-center text-4xl mb-4 text-[#CE9F95]">
          Onde Estamos
        </div>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 place-items-stretch">
        <div className="flex flex-col font-montserrat justify-center items-left px-28">
            <Image src={"/location.png"} alt={"Location Pin"} width={40} height={40} className="hidden md:block mb-16" quality={100}/>
            <p className="text-2xl text-start">Rua Helga Taveira de Souza, 469 - Céu Azul Belo Horizonte/MG</p>
        </div>
        <div className="flex justify-center">
          <Maps />
        </div>
        </div>
      </div>
    </section>
  );
}
