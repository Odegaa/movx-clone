import React from "react";
import { Container, UiError, UiPagination, UiSkeleton, UiTitle } from "src/components/ui";
import style from "./Discover.module.scss";
import { useGetDiscoverMoviesQuery } from "src/store/index.endpoints";
import { Cards } from "src/components/layouts/cards/Cards";
import { NotFoundPage } from "..";

const Discover: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isError } = useGetDiscoverMoviesQuery(page);

  return (
    <section className={style.discover}>
      <Container>
        <div className={style.discoverInner}>
          <UiTitle>Discover movies</UiTitle>
          <span className={style.moviesCount}>
            {data?.total_results} movies
          </span>
          <div className={style.cards}>
            {
              isLoading ? [...new Array(10)].map(() => <UiSkeleton />) :
                isError ? <UiError /> :
                  data && data.results.length ?
                    <Cards data={data.results} /> :
                    <NotFoundPage />
            }
          </div>
          <UiPagination
            className={style.pagination}
            current={page}
            onChange={(e) => setPage(e)}
            total={data?.total_pages}
          />
        </div>
      </Container>
    </section>
  );
};

export { Discover };