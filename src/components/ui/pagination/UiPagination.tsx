import { ConfigProvider, Pagination, PaginationProps } from "antd";
import React from "react";
import { useSelectMode, useSelectors } from "src/hook";

const UiPagination: React.FC<PaginationProps> = (props) => {
  const { mode } = useSelectors();
  const theme = useSelectMode(mode);

  return (
    <ConfigProvider theme={{ token: theme }}>
      <Pagination {...props} />
    </ConfigProvider>
  );
};
export { UiPagination };
