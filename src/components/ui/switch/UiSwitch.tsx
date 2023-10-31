import React from "react";
import { Switch, SwitchProps } from "antd";

const UiSwitch: React.FC<SwitchProps> = (props) => {
  return <Switch defaultChecked {...props} />;
};

export default UiSwitch;
