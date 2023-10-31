import React from "react";

const Cards: React.FC = ({ data }) => {
  console.log(data.results);

  return (
    <div className="cards">
      <div className="card">CARD</div>
    </div>
  );
};

export { Cards };
