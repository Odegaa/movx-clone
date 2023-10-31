import React from "react";
import { Cards } from "src/components/layouts/cards/Cards";
import { useGetUpComingMoviesQuery } from "src/store/index.endpoints";

const Home: React.FC = React.memo(() => {
  const { data = [], isLoading, isError } = useGetUpComingMoviesQuery();

  return (
    <section className="home">
      <div className="container">
        <div className="homeInner">
          <h1 className="title">Upcoming movies</h1>
          {isLoading && <h1>Loading...</h1>}
          {isError && <h1>Error...</h1>}
          {!data.length && !data && <h1>USERS NOT FOUND</h1>}
          <Cards data={data} />
        </div>
      </div>
    </section>
  );
});

export { Home };
