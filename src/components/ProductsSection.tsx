import ProductsSectionData from "./ProductsSectionImages";
import Image from "next/image";

export default function ProductsSection() {
  const productData = [
    {
      imageSrc: "/hero.png",
      title: "Limpeza de Pele",
      subtitle:
        "Safe and comfortable eyelashes by using exclusive Japanese products and best application technique",
    },
    {
      imageSrc: "/hero.png",
      title: "Massagem Modeladora",
      subtitle:
        "Safe and comfortable eyelashes by using exclusive Japanese products and best application technique",
    },
    {
      imageSrc: "/hero.png",
      title: "Ventosaterapia",
      subtitle:
        "Safe and comfortable eyelashes by using exclusive Japanese products and best application technique",
    },
    {
      imageSrc: "/hero.png",
      title: "Botox",
      subtitle:
        "Safe and comfortable eyelashes by using exclusive Japanese products and best application technique",
    },
  ];
  return (
    <section id="products">
      <div className="grid sm:grid-cols-2 grid-cols-1 h-full sm:h-full p-4 sm:p-16">
        <div className="flex flex-col items-start gap-4 ml-5 mr-5 sm:ml-10 sm:mr-28">
          <Image
            src={"/planet2.png"}
            alt={"planet"}
            width={50}
            height={50}
            className="mb-6 ml-6"
            quality={100}
          />
          <h1 className="tracking-normal text-4xl lg:text-6xl font-bold text-black font-montserrat lg:text-left">
            Quem Somos E O Que Fazemos
          </h1>
          <h2 className="text-xl font-light font-montserrat text-justify">
            A partir de 2006 surge uma preocupação que eu queria ter uma boa
            aparência para apoiar minha confiança, mas naquela época não havia
            um estúdio acessível, então estudei sobre e comecei o curso de
            Esteticista. Em 2017 resolvi abrir meu primeiro estúdio que cresceu
            muito e hoje já conquistei meu próprio espaço para atender melhor as
            pessoas. Cheque alguns dos serviços ofertados no estúdio
          </h2>
        </div>
        <div className="ml-5 mr-5 mt-5">
          <ProductsSectionData products={productData} />
        </div>
      </div>
    </section>
  );
}
