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
import { NotFoundPage } from "..";

const Upcoming: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isError } = useGetUpcomingMoviesQuery(page);

  return (
    <div className={style.upcoming}>
      <Container>
        <div className={style.upcomingInner}>
          <UiTitle>Upcoming Movie</UiTitle>
          <UiSubtitle data={data?.total_results}> movies</UiSubtitle>
          <div className={style.cards}>
            {
              isLoading ? [...new Array(10)].map(() => <UiSkeleton />) :
                isError ? <UiError /> :
                  data && data.results.length ?
                    <Cards data={data?.results} /> :
                    <NotFoundPage />
            }
          </div>
          <UiPagination
            defaultCurrent={page}
            onChange={(e) => setPage(e)}
            total={data?.total_results}
            defaultPageSize={data?.total_pages}
          />
        </div>
      </Container>
    </div>
  );
};

export { Upcoming };
