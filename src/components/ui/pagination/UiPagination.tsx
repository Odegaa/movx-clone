import React from "react";
import { ConfigProvider, Pagination, PaginationProps } from "antd";
import { useSelectMode, useSelectors } from "src/hook";

const UiPagination: React.FC<PaginationProps> = (props) => {
  const { mode } = useSelectors();
  const theme = useSelectMode(mode);

  return (
    <ConfigProvider theme={{ token: theme }}>
      <Pagination
        {...props}
        style={{ textAlign: "center", margin: "50px 0" }}
      />
    </ConfigProvider>
  );
};
export { UiPagination };
