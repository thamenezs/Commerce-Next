import React, { useState } from "react";
import Image from "next/image";

interface ProductsSectionImagesProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

const ProductsSectionImages: React.FC<ProductsSectionImagesProps> = ({
  imageSrc,
  title,
  subtitle,
}) => {
  const [isHover, setIsOver] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      <Image
        src={imageSrc}
        alt={title}
        layout="reponsive"
        width={300}
        height={300}
        className="bg-[#24CF9E] w-full"
      />
      <div className="absolute bottom-0 left-0 w-full bg-opacity-55">
        <div className="flex flex-col gap-4 bg-[#262626] font-montserrat p-7">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {isHover && <h3 className="text-[#C4C4C4] text-sm">{subtitle}</h3>}
        </div>
      </div>
    </div>
  );
};

interface ProductsSectionProps {
  products: ProductsSectionImagesProps[];
}

const ProductsSectionData: React.FC<ProductsSectionProps> = ({ products }) => {
  return (
    <section className="container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {products.map((product) => (
          <ProductsSectionImages
            key={product.title}
            imageSrc={product.imageSrc}
            title={product.title}
            subtitle={product.subtitle}
          />
        ))}
      </div>
    </section>
  );
};
export default ProductsSectionData;
