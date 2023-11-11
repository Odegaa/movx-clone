import React from "react";
import { Button } from "antd";

const UiButton: React.FC<{ children: string }> = ({ children }) => (
  <Button style={{ padding: "15px 50px", height: "50px" }} type="primary">
    {children}
  </Button>
);

export { UiButton };
