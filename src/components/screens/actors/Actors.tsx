import React from "react";
import {
  Container,
  UiError,
  UiPagination,
  UiSkeleton,
  UiSubtitle,
  UiTitle,
} from "src/components/ui";
import { useGetActorsQuery } from "src/store/index.endpoints";
import style from "./Actors.module.scss";
import { NotFoundPage } from "..";
import { ActorCard } from "src/components/layouts/actorCard/ActorCard";

const Actors: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isError } = useGetActorsQuery(page);
  const actors = data?.results;

  return (
    <section className={style.actors}>
      <Container>
        {isLoading ? (
          <UiSkeleton />
        ) : isError ? (
          <UiError />
        ) : actors && actors.length ? (
          <div className={style.actorsInner}>
            <div>
              <UiTitle>Actors</UiTitle>
              <UiSubtitle data={data.total_results}> actors</UiSubtitle>
            </div>
            <div className={style.actorsBlock}>
              {actors.map((actor) => (
                <ActorCard key={actor.id} actor={actor} />
              ))}
            </div>
            <UiPagination
              defaultCurrent={page}
              onChange={(e) => setPage(e)}
              total={data?.total_results}
              defaultPageSize={data?.total_pages}
            />
          </div>
        ) : (
          <NotFoundPage />
        )}
      </Container>
    </section>
  );
};

export { Actors };
