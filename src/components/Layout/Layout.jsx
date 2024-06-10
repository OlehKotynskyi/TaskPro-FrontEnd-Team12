import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Loader } from 'components/Loaders/Loader';
export const Layout = () => {
  return (
    <div className={css.wrapperLayout}>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
