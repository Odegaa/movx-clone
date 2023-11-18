import React from "react";
import ContentLoader from "react-content-loader";

const UiSkeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={220}
    height={460}
    viewBox="0 0 220 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="18" y="326" rx="2" ry="2" width="260" height="19" />
    <rect x="18" y="351" rx="2" ry="2" width="280" height="20" />
    <rect x="20" y="17" rx="2" ry="2" width="296" height="296" />
  </ContentLoader>
);
export { UiSkeleton };
