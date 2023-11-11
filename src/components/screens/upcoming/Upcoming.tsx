import React from "react";
import {
  Container,
  UiError,
  UiPagination,
  UiSkeleton,
  UiSubtitle,
  UiTitle,
} from "src/components/ui";
import style from "./Upcomig.module.scss";
import { useGetUpcomingMoviesQuery } from "src/store/index.endpoints";
import { Cards } from "src/components/layouts/cards/Cards";

const Upcoming: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isError } = useGetUpcomingMoviesQuery(page);

  return (
    <div className={style.upcoming}>
      <Container>
        {isLoading && <UiSkeleton />}
        {isError && <UiError />}
        {data && data?.results.length && (
          <div className={style.upcomingInner}>
            <UiTitle>Upcoming Movie</UiTitle>
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
    </div>
  );
};

export { Upcoming };
