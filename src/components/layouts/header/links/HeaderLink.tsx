import React from "react";
import { NavLink } from "react-router-dom";
import { getRoutes } from "../../routes";
import style from "./Links.module.scss";
import clsx from "clsx";

const HeaderLink: React.FC = () => {
  return (
    <ul className={style.links}>
      {getRoutes().map((route) => (
        <NavLink
          className={({ isActive }) =>
            clsx(style.link, isActive && style.active)
          }
          key={route.key}
          to={route.key}>
          {route.label}
        </NavLink>
      ))}
    </ul>
  );
};

export default HeaderLink;
