import React from "react";
import ContentLoader from "react-content-loader";

const UiSkeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="25" y="286" rx="2" ry="2" width="232" height="17" />
    <rect x="443" y="349" rx="2" ry="2" width="140" height="10" />
    <rect x="18" y="25" rx="2" ry="2" width="244" height="244" />
    <rect x="25" y="459" rx="2" ry="2" width="140" height="10" />
  </ContentLoader>
);
export { UiSkeleton };
