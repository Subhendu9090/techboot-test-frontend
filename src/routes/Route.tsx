import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { paths } from './Path';
import Home from '../pages/Home';
import Layout from '../layout/Layout';

const RoutePage: React.FC = () => {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path={paths.dashboard} element={<Home />} />
          </Routes>
        </Layout>
    </BrowserRouter>
  );
};

export default RoutePage;
