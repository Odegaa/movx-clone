import React, { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

import HeaderLink from "./links/HeaderLink";
import { Container, UiSearch } from "src/components/ui";
import logo from "src/assets/icons/logo-full.png";

import style from "./Header.module.scss";

const Header: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);

  const navigationActive = () => {
    return window.scrollY >= 80 ? setNav(true) : setNav(false);
  };

  window.addEventListener("scroll", navigationActive);

  return (
    <header className={clsx(style.header, nav && style.active)}>
      <Container>
        <div className={style.headerInner}>
          <div className={style.links}>
            <Link to="/" className={style.logo}>
              <img src={logo} alt="logo" />
            </Link>
            <HeaderLink />
          </div>
          <UiSearch />
        </div>
      </Container>
    </header>
  );
};

export default Header;
