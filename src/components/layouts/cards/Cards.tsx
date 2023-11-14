import React from "react";
import { Link } from "react-router-dom";
import { BiHeart } from "react-icons/bi";

import { imageUrl } from "src/config/baseUrl";
import { IMovieData } from "src/types";

import style from "./Cards.module.scss";

interface IProps {
  data?: IMovieData[];
}

const Cards: React.FC<IProps> = ({ data }: IProps) => (
  <div className={style.cards}>
    {data &&
      data.length &&
      data.map((movie) => (
        <div key={movie.id} className={style.card}>
          <div className={style.top}>
            <span className={style.rating}>
              &times; {Math.floor(movie.vote_average * 10) / 10}
            </span>
            <div className={style.img}>
              <img
                src={imageUrl + movie.backdrop_path}
                alt={
                  movie.original_name
                    ? movie.original_title
                    : movie.original_name
                }
              />
            </div>
            <Link to={`/movie/${movie.id}`} className={style.link}></Link>
          </div>
          <div className={style.info}>
            <div className={style.title}>
              {movie.original_title ? movie.original_title : movie.name}
            </div>
            <div className={style.subInfo}>
              <span className={style.year}>
                {movie.release_date
                  ? movie.release_date.slice(0, 4)
                  : movie.first_air_date.slice(0, 4)}
              </span>
              <span className={style.favorite}>
                <BiHeart />
              </span>
            </div>
          </div>
        </div>
      ))}
  </div>
);

export { Cards };
