import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from './Path';
import { Login, ForgotPassword, Overview, TwoStepVerification, Dashboard, TripLog, Profile, IndividualUserInfo, Trips, Tags, PageNotFound, Co2Avoided, MileSaved, TotalCredsEarned, TotalUsers } from '../pages';
import Layout from '../layout/Layout';
import SecureRoutes from './SecureRoutes';

const ProtectedLayout = () => {
  return (
    <Layout>
      <Routes>
        <Route path={paths.overview} element={<Overview />} />
        <Route path={paths.dashboard} element={<Dashboard />} />
        <Route path={paths.tripLog} element={<TripLog />} />
        <Route path={paths.individualUserInfo} element={<IndividualUserInfo />} />
        <Route path={paths.profile} element={<Profile />} />
        <Route path={paths.trips} element={<Trips />} />
        <Route path={paths.tags} element={<Tags />} />
        <Route path={paths.co2Avoided} element={<Co2Avoided />} />
        <Route path={paths.mileSaved} element={<MileSaved />} />
        <Route path={paths.totalCreds} element={<TotalCredsEarned />} />
        <Route path={paths.totalUser} element={<TotalUsers />} />
        <Route path='*' element={<PageNotFound/>}/>
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
