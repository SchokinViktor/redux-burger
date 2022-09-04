import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './scss/index.scss';
import Layout from './layout/Layout';
import Discover from './pages/Discover/Discover';
import Loader from './components/Loader/Loader';

const CustomBurger = React.lazy(() => import('./pages/CustomBurger/CustomBurger'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Discover />} />
          <Route
            path='/custom-burger'
            element={
              <Suspense fallback={<Loader />}>
                <CustomBurger />
              </Suspense>
            }
          />
        </Route>
        <Route
          path='*'
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
