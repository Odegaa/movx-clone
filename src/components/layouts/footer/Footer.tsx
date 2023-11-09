import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Container } from "src/components/ui";
import style from "./Footer.module.scss";

const Footer: React.FC = () => (
  <footer className={style.footer}>
    <Container>
      <div className={style.footerInner}>
        Made by
        <a target="_blank" href="https://www.linkedin.com/in/odegaa/">
          Ruslan Kazakhbaev
        </a>
        with
        <span>
          <AiFillHeart />
        </span>
      </div>
    </Container>
  </footer>
);

export { Footer };
