import React from "react";
import style from "./ActorCard.module.scss";
import { IActor, ICast } from "src/types";
import { imageUrl } from "src/config/baseUrl";
import { Link } from "react-router-dom";
import clsx from "clsx";

interface IProps {
  actor?: IActor | ICast;
}

const ActorCard: React.FC<IProps> = ({ actor }) => {
  return (
    <div className={style.card}>
      <div>
        <img src={imageUrl + actor?.profile_path} alt={actor?.original_name} />
        <Link to={`/actor/${actor?.id}`} className={style.link} />
      </div>
      {actor?.character && <h2 className="nickname">{actor.character}</h2>}
      <h2 className={clsx(style.name, actor?.character && style.realName)}>{actor?.original_name}</h2>
    </div>
  );
};

export { ActorCard };
