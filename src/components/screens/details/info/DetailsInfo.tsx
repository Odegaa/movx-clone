import React from "react";
import { Link } from "react-router-dom";
import { IKeywordState, IMovieData } from "src/types";
import style from "./DetailsInfo.module.scss";

interface IProps {
  movie?: IMovieData;
  keywords?: IKeywordState;
}

const DetailsInfo: React.FC<IProps> = ({ movie, keywords }) => {
  const runtime = `${
    Math.floor(movie?.runtime / 60) < 10 ? "0" : ""
  }${Math.floor(movie?.runtime / 60)}hr ${movie?.runtime % 60}min`;

  return (
    <div className={style.info}>
      <div className={style.genres}>
        <h1>Genres</h1>
        {movie &&
          movie.genres &&
          movie?.genres.map((genre) => (
            <div key={genre.id} className={style.btn}>
              {genre.name}
            </div>
          ))}
      </div>
      <div>
        <h1>Homepage</h1>
        <Link className={style.link} to={`${movie?.homepage}`}>
          visit
        </Link>
      </div>
      <div>
        <h1>Release Date</h1>
        <p>{movie?.release_date}</p>
      </div>
      <div>
        <h1>Status</h1>
        <p>{movie?.status}</p>
      </div>
      <div>
        <h1>Rating</h1>
        <p>{movie?.vote_average}</p>
      </div>
      <div>
        <h1>Budget</h1>
        <p>${movie?.budget}</p>
      </div>
      <div>
        <h1>Revenue</h1>
        <p>${movie?.revenue}</p>
      </div>
      <div>
        <h1>Runtime</h1>
        <p>{runtime}</p>
      </div>
      <div>
        <h1>Keywords</h1>
        {keywords?.keywords.map((keyword) => (
          <div key={keyword.id} className={style.btn}>
            #{keyword.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsInfo;
