import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from './Path';
import { Login, ForgotPassword, Overview, TwoStepVerification, Dashboard } from '../pages';
import Layout from '../layout/Layout';
import SecureRoutes from './SecureRoutes';

const ProtectedLayout = () => {
  return (
    <Layout>
      <Routes>
        <Route path={paths.overview} element={<Overview />} />
        <Route path={paths.dashboard} element={<Dashboard />} />
      </Routes>
    </Layout>
  );
};

const RoutePage: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.login} element={<Login />} />
        <Route path={paths.forgotPassword} element={<ForgotPassword />} />
        <Route
          path={paths.twoStepVerification}
          element={<TwoStepVerification />}
        />
        <Route element={<SecureRoutes/>}>
          <Route path="/*" element={<ProtectedLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutePage;
