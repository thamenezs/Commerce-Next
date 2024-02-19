import { secureHeapUsed } from "crypto";
import { useState } from "react";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function FeedbacksSection() {
  const [isHoverId, setIsHoverId] = useState(0);

  const feedbacksSectionData = [
    {
      id: 1,
      imageSrc:
        "https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    },
    {
      id: 2,
      imageSrc:
        "https://images.pexels.com/photos/5069609/pexels-photo-5069609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    },
    {
      id: 3,
      imageSrc:
        "https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    },
    {
      id: 4,
      imageSrc:
        "https://images.pexels.com/photos/7582560/pexels-photo-7582560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    },
    {
      id: 5,
      imageSrc:
        "https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    },
    {
      id: 6,
      imageSrc:
        "https://images.pexels.com/photos/6560282/pexels-photo-6560282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    },
    {
      id: 7,
      imageSrc:
        "https://images.pexels.com/photos/5793890/pexels-photo-5793890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    },
    {
      id: 8,
      imageSrc:
        "https://images.pexels.com/photos/7479983/pexels-photo-7479983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    },
    {
      id: 9,
      imageSrc:
        "https://images.pexels.com/photos/5938592/pexels-photo-5938592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    },
    {
      id: 10,
      imageSrc:
        "https://images.pexels.com/photos/5217926/pexels-photo-5217926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    },
    {
      id: 11,
      imageSrc:
        "https://images.pexels.com/photos/6663592/pexels-photo-6663592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    },
    {
      id: 12,
      imageSrc:
        "https://images.pexels.com/photos/7019474/pexels-photo-7019474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    },
    {
      id: 13,
      imageSrc:
        "https://images.pexels.com/photos/9253762/pexels-photo-9253762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    },
    {
      id: 14,
      imageSrc:
        "https://images.pexels.com/photos/15327096/pexels-photo-15327096/free-photo-of-retrato.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    },
    {
      id: 15,
      imageSrc:
        "https://images.pexels.com/photos/7446693/pexels-photo-7446693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "",
    },
  ];
  return (
    <section className="w-full h-full bg-white" id="friends">
      <div className="font-montserrat font-semibold text-center text-4xl my-8">
        My Beautiful Friends
      </div>
      <div className="p-6 lg:p-10">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 300: 3, 500: 3, 700: 4, 900: 5 }}
        >
          <Masonry columnsCount={7}>
            {feedbacksSectionData.map((data) => (
              <div
                key={data.alt}
                onMouseEnter={() => setIsHoverId(data.id)}
                className={
                  isHoverId == data.id
                    ? ""
                    : "grayscale transition-all scale-95 duration-500"
                }
              >
                <Image
                  src={data.imageSrc}
                  alt={data.alt}
                  width={300}
                  height={100}
                  objectFit="cover"
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  );
}
