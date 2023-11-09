import React from "react";

import { Cards } from "src/components/layouts/cards/Cards";
import {
  UiSwiper,
  Container,
  UiPagination,
  UiTitle,
  UiSkeleton,
  UiError,
} from "src/components/ui";
import { useGetUpcomingMoviesQuery } from "src/store/index.endpoints";

import style from "./Home.module.scss";

const Home: React.FC = React.memo(() => {
  const [moviePage, setMoviePage] = React.useState(1);
  const { data, isLoading, isError } = useGetUpcomingMoviesQuery(moviePage);

  return (
    <section className={style.home}>
      {isLoading && <UiSkeleton />}
      {isError && <UiError />}
      {!data?.results.length && !data?.results && <h1>MOVIES NOT FOUND</h1>}
      <UiSwiper data={data?.results} />
      <Container>
        <div className={style.homeInner}>
          <div>
            <UiTitle>Upcoming Movie</UiTitle>
            <span className={style.moviesCount}>
              {data?.total_results} movies
            </span>
          </div>
          {!data?.results.length && !data?.results && <h1>MOVIES NOT FOUND</h1>}
          <Cards data={data?.results} />
          <UiPagination
            className={style.pagination}
            defaultCurrent={moviePage}
            onChange={(e) => setMoviePage(e)}
            total={data?.total_pages}
            defaultPageSize={data?.total_pages}
          />
        </div>
      </Container>
    </section>
  );
});

export { Home };
