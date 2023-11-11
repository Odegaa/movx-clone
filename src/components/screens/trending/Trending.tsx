import React from "react";
import {
  Container,
  UiError,
  UiPagination,
  UiSkeleton,
  UiSubtitle,
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
            <UiSubtitle data={data?.total_results}> movies</UiSubtitle>
            <Cards data={data?.results} />
            <UiPagination
              defaultCurrent={page}
              onChange={(e) => setPage(e)}
              total={data?.total_results}
              defaultPageSize={data?.total_pages}
            />
          </div>
        )}
      </Container>
    </section>
  );
};

export { Trending };
