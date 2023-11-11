import React from "react";
import { CategoryCard } from "src/components/layouts/categoryCard/CategoryCard";
import { Container, UiError, UiSkeleton, UiTitle } from "src/components/ui";
import { useGetCategoriesQuery } from "src/store/index.endpoints";
import style from "./Category.module.scss";

const Category: React.FC = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery();

  return (
    <section className={style.category}>
      <Container>
        {isLoading && <UiSkeleton />}
        {isError && <UiError />}
        <div className={style.title}>
          <UiTitle>Categories</UiTitle>
        </div>
        {data && data?.genres.length && (
          <div className={style.categoryInner}>
            {data.genres.map((genre) => (
              <CategoryCard key={genre.id} genre={genre} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export { Category };
