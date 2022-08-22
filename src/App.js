import React from "react";
import { Route, Routes } from "react-router-dom";

import "./scss/index.scss";
import Layout from "./layout/Layout";
import Discover from "./pages/Discover/Discover";
import CustomBurger from "./pages/CustomBurger";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Discover />} />
          <Route path='/custom-burger' element={<CustomBurger />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
