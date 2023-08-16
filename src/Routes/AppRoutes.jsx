import { lazy, Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import { routes } from '../Constants/Routes';
import { StyledLoading } from '../Component/loading/loadingStyle';
const Home = lazy(() => import('../Pages/home'));
const Detail = lazy(() => import('../Pages/details'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<StyledLoading>Loading...</StyledLoading>}>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={`${routes.MOVIE_DETAILS}/:id`} element={<Detail />} />
        <Route path='*' element={<Navigate to={routes.HOME} replace />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
