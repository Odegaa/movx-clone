import React from "react";
import style from "./Subtitle.module.scss";

const UiSubtitle: React.FC<{ data?: number; children: string }> = ({
  data,
  children,
}) => (
  <span className={style.moviesCount}>
    {data} {children}
  </span>
);

export { UiSubtitle };
