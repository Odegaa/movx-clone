import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import { getRoutes } from "src/components/layouts/routes";
import style from "./Links.module.scss";

const HeaderLink: React.FC = () => (
  <ul className={style.links}>
    {getRoutes().map((route) => (
      <NavLink
        className={({ isActive }) => clsx(style.link, isActive && style.active)}
        key={route.key}
        to={route.key}>
        {route.label}
      </NavLink>
    ))}
  </ul>
);

export default HeaderLink;
