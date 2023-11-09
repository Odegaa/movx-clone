import React from "react";
import { Container, UiPagination, UiTitle } from "src/components/ui";
import style from "./Discover.module.scss";
import { useGetDiscoverMoviesQuery } from "src/store/index.endpoints";
import { Cards } from "src/components/layouts/cards/Cards";

const Discover: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isError } = useGetDiscoverMoviesQuery(page);

  return (
    <section className={style.discover}>
      <Container>
        {isLoading && <h1>Loading...</h1>}
        {isError && <h1>SERVER ERROR</h1>}
        {data && data.results.length && (
          <div className={style.discoverInner}>
            <UiTitle>Discover movies</UiTitle>
            <span className={style.moviesCount}>
              {data?.total_results} movies
            </span>
            <Cards data={data.results} />
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

export { Discover };
