import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/Store";
import { paths } from "./Path";

interface LayoutProps {
  children?: React.ReactNode;
}

const SecureRoutes: React.FC<LayoutProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  console.log(isAuthenticated);
  

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(paths.login);
    }
  }, []);

  return <>{children || <Outlet />}</>;
};

export default SecureRoutes;
