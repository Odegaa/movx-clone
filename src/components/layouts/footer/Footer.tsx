import React from "react";
import { AiFillHeart } from "react-icons/ai";
import style from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footerInner}>
          Made by
          <a href="https://www.linkedin.com/in/odegaa/">Ruslan Kazakhbaev</a>
          with
          <span>
            <AiFillHeart />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
