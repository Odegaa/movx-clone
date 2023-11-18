import React from "react";
import { ConfigProvider, Switch, SwitchProps } from "antd";
import { useSelectors } from "src/hook/selector/useSelector";
import { useSelectMode } from "src/hook/selectMode/useSelectMode";

const UiSwitch: React.FC<SwitchProps> = (props) => {
  const { mode } = useSelectors();
  const theme = useSelectMode(mode);
  return (
    <ConfigProvider theme={{ token: theme }}>
      <Switch {...props} />
    </ConfigProvider>
  );
};

export default UiSwitch;
