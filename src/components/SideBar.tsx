import { FC, useState } from 'react';
import {
  Home,
  Inbox,
  FileText,
  Users,
  MapPin,
  HelpCircle,
  BarChart2,
  DollarSign,
  ChevronLeft,
  Menu,
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const activePage = location.pathname;

  const menuItems = [
    { id: '', name: 'Dashboard', icon: Home },
    { id: 'inbox', name: 'Inbox', icon: Inbox },
    { id: 'leads', name: 'Lead objects', icon: FileText },
    { id: 'trades', name: 'Trades', icon: Users, badge: 8 },
    { id: 'postal', name: 'Postal codes', icon: MapPin },
    { id: 'support', name: 'Support', icon: HelpCircle },
    { id: 'quality', name: 'Quality', icon: BarChart2 },
    { id: 'finance', name: 'Finance', icon: DollarSign },
  ];

  const handleNavigate = (id: string) => {
    navigate(`/${id}`);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger */}
      <div className="flex items-center justify-between p-4 text-white bg-teal-900 md:hidden">
        <Menu
          size={24}
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 w-[272px] h-full bg-teal-900 text-white transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:relative md:translate-x-0 md:flex md:flex-col`}
      >
        <div className="flex items-center justify-between p-4 md:justify-start">
          <ChevronLeft
            size={20}
            className="text-white cursor-pointer md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <h2 className="hidden ml-2 text-lg font-semibold md:block">
            Sidebar
          </h2>
        </div>

        <div className="flex-1">
          {menuItems.map((item) => {
            const isActive = activePage == `/${item.id}`;

            return (
              <div
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-4 py-2 flex items-center cursor-pointer hover:bg-teal-800 transition ${
                  isActive ? 'bg-teal-800 border-l-4 border-teal-300' : ''
                }`}
              >
                <item.icon size={18} className="mr-3" />
                <span className="flex items-center">
                  {item.name}
                  {item.badge && (
                    <span className="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs bg-red-500 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </span>
              </div>
            );
          })}
        </div>

        <div className="p-4 text-xs border-t border-teal-800">
          <div className="flex items-center justify-between">
            <span>Version 3.2.1</span>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
