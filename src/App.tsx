import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import { routes } from "./routes";

const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
