import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  const data = [
    {
      id: "1",
      image: "/hero.png",
    },
    {
      id: "2",
      image:
        "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "3",
      image:
        "https://images.pexels.com/photos/2039606/pexels-photo-2039606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="container">
      <div>
        <Swiper
          slidesPerView={1}
          pagination={{
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectFade, Pagination, Navigation, Autoplay]}
          effect="fade"
          className="sm:h-[calc(100vh-88px)] h-[calc(50vh-88px)] w-full"
          autoplay={{ delay: 1000, stopOnLastSlide: false}}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="flex h-full w-full items-center justify-center static">
                <Image
                  src={item.image}
                  alt={"photos"}
                  fill={true}
                  quality={100}
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
