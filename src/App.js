import React from "react";
import { Route, Routes } from "react-router-dom";

import "./scss/index.scss";
import Layout from "./layout/Layout";
import Discover from "./pages/Discover";
import CustomBurger from "./pages/CustomBurger";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Discover />} />
          <Route path='/custom-burger' element={<CustomBurger />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
