import ProductsSectionImages from "./ProductsSectionImages";
import Image from "next/image";

export default function ProductsSection() {
  return (
    <section id="products">
      <div className="grid sm:grid-cols-2 grid-cols-1 place-items-stretch h-screen sm:h-full p-16">
        <div className="flex flex-col items-start gap-4 ml-10 mr-28">
          <Image
            src={"/planet.jpeg"}
            alt={"planet"}
            width={50}
            height={50}
            className="mb-6 ml-6 mt-20"
          />
          <h1 className="tracking-normal text-4xl lg:text-6xl font-bold text-black font-montserrat lg:text-left">
            Where We Start And Here We Are
          </h1>
          <h2 className="font-light font-montserrat text-base text-justify mt-9">
            Starting from 2006 and starting with a concern I wanted to look good
            to support my confidence but at that time there was no eyelash salon
            in Bali, then I studied in Japan and practiced it with friends and
            gradually I got recognition from relatives and friends. my
            environment so that in 2012 I decided to open my first studio and
            has grown to date opening 4 services as follows
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <ProductsSectionImages
            imageSrc={"/hero.png"}
            title={"Eyelash extension"}
            subtitle={
              "Safe and comfortable eyelashes by using exclusive Japanese products and best application technique"
            }
          />
          <ProductsSectionImages
            imageSrc={"/hero.png"}
            title={"Eyelash extension"}
            subtitle={
              "Safe and comfortable eyelashes by using exclusive Japanese products and best application technique"
            }
          />
          <ProductsSectionImages
            imageSrc={"/hero.png"}
            title={"Eyelash extension"}
            subtitle={
              "Safe and comfortable eyelashes by using exclusive Japanese products and best application technique"
            }
          />
          <ProductsSectionImages
            imageSrc={"/hero.png"}
            title={"Eyelash extension"}
            subtitle={
              "Safe and comfortable eyelashes by using exclusive Japanese products and best application technique"
            }
          />
        </div>
      </div>
    </section>
  );
}
