import React from "react";
import {
  Container,
  UiError,
  UiPagination,
  UiSkeleton,
  UiSubtitle,
  UiTitle,
} from "src/components/ui";
import { useGetTvShowsQuery } from "src/store/index.endpoints";
import style from "./tvshows.module.scss";
import { Cards } from "src/components/layouts/cards/Cards";
import { NotFoundPage } from "..";

const TvShows: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isError } = useGetTvShowsQuery(page);

  return (
    <section className={style.tv}>
      <Container>
        {isLoading && <UiSkeleton />}
        {isError && <UiError />}
        {data && data.results.length && (
          <div className={style.tvInner}>
            <UiTitle>Tv Shows</UiTitle>
            <UiSubtitle data={data?.total_results}> tv shows</UiSubtitle>
            {data && data.results.length ? (
              <Cards data={data.results} />
            ) : (
              <NotFoundPage />
            )}
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

export { TvShows };
