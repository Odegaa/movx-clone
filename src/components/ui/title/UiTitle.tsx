import React from "react";
import style from "./Title.module.scss";

interface IProps {
  children: string;
}
const UiTitle: React.FC<IProps> = ({ children }) => (
  <h1 className={style.title}>{children}</h1>
);

export { UiTitle };
