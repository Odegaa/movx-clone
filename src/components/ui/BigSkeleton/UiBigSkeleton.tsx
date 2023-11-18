import React from 'react'
import ContentLoader from "react-content-loader";

const UiBigSkeleton: React.FC = () => (
    <ContentLoader
        speed={2}
        width={1350}
        height={1000}
        viewBox="0 0 1350 1000"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="20" y="17" rx="2" ry="2" width="1350" height="1000" />
    </ContentLoader>
)

export { UiBigSkeleton }