import React from "react";
import { useGetActorByIdQuery } from "src/store/index.endpoints";
import { Container, UiError, UiSkeleton } from "src/components/ui";
import style from "./ActorDetail.module.scss";
import { NotFoundPage } from "..";

const ActorDetail: React.FC = () => {
  const {
    data: actor,
    isLoading,
    isError,
  } = useGetActorByIdQuery(
    +window.location.href.substring(window.location.href.lastIndexOf("/") + 1)
  );

  return (
    <section className={style.detail}>
      <Container>
        {isLoading ? (
          <UiSkeleton />
        ) : isError ? (
          <UiError />
        ) : actor ? (
          <div className={style.detailInner}>Actor {actor?.id}</div>
        ) : (
          <NotFoundPage />
        )}
      </Container>
    </section>
  );
};

export { ActorDetail };
