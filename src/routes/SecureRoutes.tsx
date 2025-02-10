import { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/Store';
import { paths } from './Path';

interface LayoutProps {
  children?: React.ReactNode;
}

const SecureRoutes: React.FC<LayoutProps> = ({ children }) => {
  const { isAuthenticated, login,logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const savedToken = localStorage.getItem('authToken');
    const savedUserEmail = localStorage.getItem('authUser');

    if (savedToken && savedUserEmail) {
      try {
        login(JSON.parse(savedUserEmail), JSON.parse(savedToken));
      } catch (error) {
        console.error('Error parsing stored user email');
        logout()
      }
    } else if (!isAuthenticated) {
      navigate(paths.login);
    }
  }, [ isAuthenticated, navigate]);

  return <>{children || <Outlet />}</>;
};

export default SecureRoutes;
