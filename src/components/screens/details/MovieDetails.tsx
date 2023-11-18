import React from "react";
import style from "./details.module.scss";
import {
  useGetMovieByIdQuery,
  useGetMovieCreditsQuery,
  useGetMovieKeywordsQuery,
} from "src/store/index.endpoints";
import {
  Container,
  UiError,
  UiSkeleton,
  UiBigSkeleton,
  UiTitle,
} from "src/components/ui";
import { NotFoundPage } from "..";
import { imageUrl } from "src/config/baseUrl";
import { ActorCard } from "src/components/layouts/actorCard/ActorCard";
import DetailsInfo from "./info/DetailsInfo";

const MovieDetails: React.FC = () => {
  const movieId = +window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  const {
    data: movie,
    isLoading: isMovieLoading,
    isError: isMovieError,
  } = useGetMovieByIdQuery(movieId);

  const { data: keywords } = useGetMovieKeywordsQuery(movieId);

  const {
    data: casts,
    isLoading: isCastLoading,
    isError: isCastError,
  } = useGetMovieCreditsQuery(movieId);

  const actors = casts?.cast;
  console.log(actors);

  return (
    <section className={style.details}>
      <Container>
        {isMovieLoading ? (
          <UiBigSkeleton />
        ) : isMovieError ? (
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
            <div className={style.detailsInner}>
              <div className={style.left}>
                <UiTitle>Top Billed Casts</UiTitle>
                <div className={style.actors}>
                  {isCastLoading ? (
                    [...new Array(10)].map(() => (
                      <UiSkeleton />
                    ))
                  ) : isCastError ? (
                    <UiError />
                  ) : actors && actors?.length ? (
                    actors
                      .map((actor) => (
                        <ActorCard key={actor.id} actor={actor} />
                      ))
                  ) : (
                    <NotFoundPage />
                  )}
                </div>
              </div>
              <div className={style.detailsInfo}>
                <DetailsInfo movie={movie} keywords={keywords} />
              </div>
            </div>
          </>
        ) : (
          <NotFoundPage />
        )}
      </Container>
    </section>
  );
};

export { MovieDetails };
