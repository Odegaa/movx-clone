import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isLoading = false;
  return (
    <div className="container" style={{ opacity: `${isLoading ? 0.5 : 1}` }}>
      {children}
    </div>
  );
};

export { Container };
