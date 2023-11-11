import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation } from "swiper/modules";

import { IMovieData } from "src/types";
import { UiButton } from "..";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import style from "./Swiper.module.scss";

const UiSwiper: React.FC<{ data?: IMovieData[] }> = ({ data }) => (
  <Swiper
    effect={"fade"}
    loop={true}
    navigation={true}
    modules={[EffectFade, Navigation]}
    className={style.mySwiper}>
    {data &&
      data.length &&
      data.map((movie) => (
        <SwiperSlide key={movie.id}>
          <div className={style.swiper}>
            <div className="container">
              <div className={style.topMovie}>
                <div className={style.info}>
                  <h2 className={style.title}>{movie.title}</h2>
                  <div className={style.rating}>{movie.vote_average}</div>
                  <div className={style.hashtags}>{movie.category_ids}</div>
                  <p className={style.desc}>{movie.overview}</p>
                  <UiButton>View Mode</UiButton>
                </div>
                <div className={style.swiperImg}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.original_title}
                  />
                </div>
              </div>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt={movie.original_title}
              className={style.backdropImage}
            />
          </div>
        </SwiperSlide>
      ))}
  </Swiper>
);
export { UiSwiper };
