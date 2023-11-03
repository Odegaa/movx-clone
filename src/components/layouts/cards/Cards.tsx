import React from "react";
import { Result } from "src/store/home/upcoming.types";

const Cards: React.FC<Result> = (movie) => {
  return (
    <div className="cards">
      <div className="card">
        <div>{movie.original_title}</div>
      </div>
    </div>
  );
};

export { Cards };
