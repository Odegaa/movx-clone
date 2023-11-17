import React from "react";
import { Button } from "antd";
import style from "./button.module.scss";

const UiButton: React.FC<{ children: string }> = ({ children, ...props }) => (
  <Button {...props} className={style.btn} type="primary">
    {children}
  </Button>
);

export { UiButton };
