import React from "react";

import {
  UiButton,
  UiSwiper,
  Container,
  UiTitle,
  UiSkeleton,
  UiError,
} from "src/components/ui";
import {
  useGetTrendingMoviesQuery,
  useGetUpcomingMoviesQuery,
} from "src/store/index.endpoints";
import { Cards } from "src/components/layouts/cards/Cards";
import style from "./Home.module.scss";
import { Link } from "react-router-dom";

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
      {isLoadingUpcomingMovies && isLoadingTrendingMovies && <UiSkeleton />}
      {isErrorUpcomingMovies && isErrorTrendingMovies && <UiError />}
      {upcomingMovies?.results.length && trendingMovies?.results.length && (
        <>
          <UiSwiper data={upcomingMovies?.results} />
          <Container>
            <div className={style.homeInner}>
              <div>
                <UiTitle>Upcoming Movies</UiTitle>
                <Cards data={upcomingMovies?.results.slice(0, 10)} />
                <Link to="/upcoming" className={style.link}>
                  <UiButton data-main>All upcoming movies view</UiButton>
                </Link>
              </div>
              <div>
                <UiTitle>Trending Movies</UiTitle>
                <Cards data={trendingMovies?.results.slice(0, 10)} />
                <Link to="/trending" className={style.link}>
                  <UiButton data-main>All trending movies view</UiButton>
                </Link>
              </div>
            </div>
          </Container>
        </>
      )}
    </section>
  );
});

export { Home };
