import React from "react";
import { Link } from "react-router-dom";
import { ICategory } from "src/types";
import { UiTitle } from "src/components/ui";
import style from "./categoryCard.module.scss";

interface IProps {
  genre: ICategory;
}

const CategoryCard: React.FC<IProps> = ({ genre }) => (
  <div
    className={style.card}
    style={{
      background: `url(/.jpg)`,
    }}>
    <Link
      className={style.link}
      to={`/category/${genre.name.toLowerCase().replace(" ", "-")}/${genre.id}`}>
      <UiTitle>{genre.name || "Not Available"}</UiTitle>
    </Link>
  </div>
);

export { CategoryCard };
