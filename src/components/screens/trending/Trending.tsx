import React from "react";
import {
  Container,
  UiError,
  UiPagination,
  UiSkeleton,
  UiTitle,
} from "src/components/ui";

import style from "./Trending.module.scss";
import { Cards } from "src/components/layouts/cards/Cards";
import { useGetTrendingMoviesQuery } from "src/store/index.endpoints";

const Trending: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isError } = useGetTrendingMoviesQuery(page);

  return (
    <section className={style.trending}>
      <Container>
        {isLoading && <UiSkeleton />}
        {isError && <UiError />}
        {data && data.results.length && (
          <div className={style.trendingInner}>
            <UiTitle>Trending Movies</UiTitle>
            <span className={style.moviesCount}>
              {data?.total_results} movies
            </span>
            <Cards data={data?.results} />
            <UiPagination
              className={style.pagination}
              current={page}
              onChange={(e) => setPage(e)}
              total={data?.total_pages}
            />
          </div>
        )}
      </Container>
    </section>
  );
};

export { Trending };
