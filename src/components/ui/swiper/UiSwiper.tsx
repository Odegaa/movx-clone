import React from "react";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import style from "./Swiper.module.scss";

const UiSwiper: React.FC<SwiperProps> = (props) => {
  console.log(props);

  return (
    <div className={style.swiperBlock}>
      <Swiper
        className={style.mySwiper}
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 50,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Navigation]}>
        <SwiperSlide className={style.swiperSlide}>
          <img src="https://image.tmdb.org/t/p/original/kP8rK9dGS1pr0HrnmXfIi2heWjo.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export { UiSwiper };
