import React from 'react';
import Sidebar from '../components/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
 
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 h-full min-h-screen">
        <Sidebar/>
      </div>

      <main className={`flex-1 md:ml-[272px] mt-12 md:mt-0 overflow-y-auto`}>
        <div className="px-4 pt-[20px]">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
