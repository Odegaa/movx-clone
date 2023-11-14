import React from "react";
import style from "./details.module.scss";
import { useGetMovieByIdQuery } from "src/store/index.endpoints";
import { Container, UiError, UiSkeleton, UiTitle } from "src/components/ui";
import { NotFoundPage } from "..";
import { imageUrl } from "src/config/baseUrl";

const MovieDetails: React.FC = () => {
  const movieId = +window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );
  const { data: movie, isLoading, isError } = useGetMovieByIdQuery(movieId);
  console.log(movie);

  return (
    <section className={style.details}>
      <Container>
        {isLoading ? (
          <UiSkeleton />
        ) : isError ? (
          <UiError />
        ) : movie ? (
          <>
            <div
              className={style.movieOverview}
              style={{
                background: `url(${imageUrl}${movie.backdrop_path}) center center/cover no-repeat`,
              }}>
              <div className={style.overviewInner}>
                <div className={style.movieImg}>
                  <img
                    src={imageUrl + movie.poster_path}
                    alt={movie.original_title}
                  />
                </div>
                <div className={style.info}>
                  <UiTitle>{movie.original_title}</UiTitle>
                  <span>{movie.vote_average}</span>
                  <p className="desc">{movie.overview}</p>
                </div>
              </div>
            </div>
            <div className={style.detailsInner}>Details</div>
          </>
        ) : (
          <NotFoundPage />
        )}
      </Container>
    </section>
  );
};

export { MovieDetails };
