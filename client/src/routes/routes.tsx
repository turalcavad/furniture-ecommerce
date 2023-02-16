import { Route, Routes as ReactRoutes } from 'react-router-dom';
import Home from 'pages/home';
import PATH from './paths';

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path={PATH.HOME} element={<Home />} />
    </ReactRoutes>
  );
};
