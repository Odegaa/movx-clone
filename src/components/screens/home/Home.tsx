import React from "react";

import {
  UiButton,
  UiSwiper,
  Container,
  UiTitle,
  UiSkeleton,
  UiError,
  UiBigSkeleton,
} from "src/components/ui";
import {
  useGetTrendingMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "src/store/index.endpoints";
import { Cards } from "src/components/layouts/cards/Cards";
import style from "./Home.module.scss";
import { Link } from "react-router-dom";
import { NotFoundPage } from "..";

const Home: React.FC = React.memo(() => {
  const {
    data: upcomingMovies,
    isLoading: isLoadingUpcomingMovies,
    isError: isErrorUpcomingMovies,
  } = useGetUpcomingMoviesQuery(1);

  const {
    data: trendingMovies,
    isLoading: isLoadingTrendingMovies,
    isError: isErrorTrendingMovies,
  } = useGetTrendingMoviesQuery(1);

  return (
    <section className={style.home}>
      {
        isLoadingUpcomingMovies ? <UiBigSkeleton /> : isErrorUpcomingMovies ? <UiError /> :
          upcomingMovies?.results.length && trendingMovies?.results.length ? (
            <>
              <UiSwiper data={upcomingMovies?.results} />
              <Container>
                <div className={style.homeInner}>
                  <div>
                    <UiTitle>Upcoming Movies</UiTitle>
                    <div className={style.cards}>
                      {
                        isLoadingUpcomingMovies ?
                          [...new Array(10)].map(() => <UiSkeleton />) :
                          isErrorUpcomingMovies ?
                            <UiError /> :
                            upcomingMovies && upcomingMovies.results.length &&
                            <Cards data={upcomingMovies?.results.slice(0, 10)} />
                      }
                    </div>
                    <Link to="/upcoming" className={style.link}>
                      <UiButton data-main>All upcoming movies view</UiButton>
                    </Link>
                  </div>
                  <div>
                    <UiTitle>Trending Movies</UiTitle>
                    <div className={style.cards}>
                      {
                        isLoadingTrendingMovies ?
                          [...new Array(10)].map(() => <UiSkeleton />) :
                          isErrorTrendingMovies ?
                            <UiError /> :
                            trendingMovies && trendingMovies.results.length &&
                            <Cards data={trendingMovies?.results.slice(0, 10)} />
                      }
                    </div>
                    <Link to="/trending" className={style.link}>
                      <UiButton data-main>All trending movies view</UiButton>
                    </Link>
                  </div>
                </div>
              </Container>
            </>
          ) : <NotFoundPage />}
    </section>
  )
});

export { Home };
