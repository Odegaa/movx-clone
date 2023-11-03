import React from "react";
import axios from "axios";
import { Cards } from "src/components/layouts/cards/Cards";
import { baseUrl } from "src/config/baseUrl";
import { Result } from "src/store/home/upcoming.types";
import { useGetUpComingMoviesQuery } from "src/store/index.endpoints";
import style from "./Home.module.scss";

const Home: React.FC = React.memo(() => {
  const [movies, setMovies] = React.useState<Result[]>([]);
  const { data = [] } = useGetUpComingMoviesQuery();
  console.log(data);

  const getUpcomingMovies = async () => {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}movie/upcoming`,
      params: { language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDI1NTFjZjMzZjdiMGU4YmQ3NjBiMDczOTRiODAwYiIsInN1YiI6IjY1MzhhYTQ4MGZiMTdmMDExYjEzZGQ2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3GetCvf3C2IppxdIBQNtiQH2oFbGeEt7Fz3-1sJiGVc",
      },
    });
    const { data } = response;
    setMovies(data.results);
  };

  React.useEffect(() => {
    getUpcomingMovies();
  }, []);

  return (
    <section className={style.home}>
      <div className={style.swiper}>
        {!movies.length && !movies && <h1>USERS NOT FOUND</h1>}
        {movies.map((movie, index) => (
          <img
            key={index}
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt={movie.original_title}
            className={style.swiperImg}
          />
        ))}
      </div>
      <div className="container">
        <div className="homeInner">
          <h1 className="title">Upcoming movies</h1>
          {!movies.length && !movies && <h1>USERS NOT FOUND</h1>}
          {movies.map((movie, index) => (
            <Cards key={index} {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
});

export { Home };
