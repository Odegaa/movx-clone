import React from "react";
import style from "./ActorCard.module.scss";
import { IActor } from "src/types";
import { imageUrl } from "src/config/baseUrl";
import { Link } from "react-router-dom";

interface IProps {
  actor?: IActor;
}

const ActorCard: React.FC<IProps> = ({ actor }) => {
  return (
    <div className={style.card}>
      <div>
        <img src={imageUrl + actor?.profile_path} alt={actor?.original_name} />
        <Link to={`/actor/${actor?.id}`} className={style.link} />
      </div>
      <h2 className={style.name}>{actor?.original_name}</h2>
    </div>
  );
};

export { ActorCard };
