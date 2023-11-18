import React from "react";
import Header from "./header/Header";
import { Footer } from "./footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useLabel } from "src/hook/label/useLabel";
import style from "./Layout.module.scss";
import UiSwitch from "../ui/switch/UiSwitch";

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const label = useLabel(pathname);

  React.useEffect(() => {
    if (label) label;
  }, [label]);

  return (
    <div className={style.layout}>
      <main className={style.main}>
        <Header />
        <Outlet />
        <Footer />
      </main>
      <UiSwitch className={style.switch} />
    </div>
  );
};

export default Layout;
