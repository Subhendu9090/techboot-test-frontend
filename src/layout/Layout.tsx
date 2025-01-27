import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { SideBar } from '../components';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Fixed sidebar */}
      <div className="fixed top-0 left-0">
        <SideBar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      <main className="flex-1 md:ml-[272px] overflow-y-auto">
        {/* Header with mobile menu button */}
        <header className={`sticky top-0 ${isSidebarOpen ? " hidden": "" } bg-white border-b md:hidden`}>
          <div className="p-4">
            <button
              className="p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </header>

        {/* Main content */}
        <div className="px-2 pt-[50px]">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
