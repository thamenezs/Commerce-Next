import ProductsSectionData from "./ProductsSectionImages";
import Image from "next/image";

export default function ProductsSection() {
  const productData = [
    {
      imageSrc: "/microlips.png",
      title: "Microlips",
      subtitle:
        "Safe and comfortable eyelashes by using exclusive Japanese products and best application technique",
    },
    {
      imageSrc: "/liporeduz.png",
      title: "Lipo Reduz",
      subtitle:
        "Safe and comfortable eyelashes by using exclusive Japanese products and best application technique",
    },
    {
      imageSrc: "/celuliteoff.png",
      title: "Celulite Off",
      subtitle:
        "Safe and comfortable eyelashes by using exclusive Japanese products and best application technique",
    },
    {
      imageSrc: "/enzimas.png",
      title: "Enzimas",
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
          <h1 className="tracking-normal text-4xl lg:text-6xl font-bold text-[#CE9F95] font-montserrat lg:text-left">
            Quem Sou Eu E O Que Faço
          </h1>
          <h2 className="text-xl font-light font-montserrat text-justify">
            Sou a Jessica Gomes, 32 anos, casada e dona do Estúdio Jessica Gomes
            Estética Avançada! Sou empreendedora há 4 anos, graduada em Estética
            e Cosmetologia pela FACEMG e pós graduaçao em Estética Injetáveis.
            Sou comprometida em ajudar pessoas a encontrarem sua melhor versão
            por meio de cuidados estéticos! Conheça alguns dos procedimentos que
            realizamos aqui no estúdio
          </h2>
        </div>
        <div className="ml-5 mr-5 mt-5">
          <ProductsSectionData products={productData} />
        </div>
      </div>
    </section>
  );
}
