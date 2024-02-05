import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import { ReactNode } from 'react';
import AltaiPage from '../pages/Altai';

interface IRoute {
  path: string;
  component: ReactNode;
}
const AppRouter = () => {
  const routes: IRoute[] = [
    {
      path: '/',
      component: <HomePage />,
    },
    {
      path: '/altai',
      component: <AltaiPage />,
    },
  ];

  return (
    <main>
      <Routes>
        {routes.map(route => (
          <Route element={route.component} path={route.path} key={route.path} />
        ))}
      </Routes>
    </main>
  );
};

export default AppRouter;
