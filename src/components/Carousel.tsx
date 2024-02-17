import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Carousel() {
  const data = [
    {
      id: "1",
      image: "/hero.png",
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/7006367/pexels-photo-7006367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "3",
      image:
        "https://images.pexels.com/photos/7006368/pexels-photo-7006368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="container">
      <div>
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active",
            bulletClass: "swiper-pagination-bullet",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectFade, Pagination, Navigation]}
          effect="fade"
          className="sm:h-[calc(100vh-88px)] h-[calc(50vh-88px)] w-full"
          autoplay={true}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex h-full w-full items-center justify-center">
                <Image
                  className=""
                  src={item.image}
                  alt={"photos"}
                  fill={true}
                />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </div>
    </div>
  );
}
