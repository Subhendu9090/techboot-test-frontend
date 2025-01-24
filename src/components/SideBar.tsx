import React, { useState } from 'react';
import {   
  Home,   
  Map,   
  FileText,   
  Settings,   
  Tag,   
  User,   
  LogOut,   
  X,   
  BarChart2,
  ChevronDown,
  ChevronRight 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { paths } from '../routes/Path';
import { useAuth } from '../contexts/Store';

interface SubMenuItem {
  title: string;
  icon?: string;
  path?: string;
}

interface MenuItem {
  title: string;
  icon: React.ComponentType;
  path: string;
  subTitles?: SubMenuItem[];
}

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { logout } = useAuth();
  const [openMenus, setOpenMenus] = useState<{[key: string]: boolean}>({});

  const menuItems: MenuItem[] = [
    { 
      title: 'Overview', 
      icon: Home, 
      path: paths.overview 
    },
    { 
      title: 'Trip Log', 
      icon: Map, 
      path: paths.tripLog 
    },
    { 
      title: 'Profile', 
      icon: Settings, 
      path: paths.profile,
      subTitles: [
        {
          title: "User Profile",
          icon: "/icons/user-profile.png",
          path: paths.profile
        },
        {
          title: "Security",
          icon: "/icons/security.png",
          path: paths.profile
        },
      ] 
    },
    { 
      title: 'Dashboard Control', 
      icon: BarChart2, 
      path: paths.dashboard 
    },
    { 
      title: 'Reports', 
      icon: FileText, 
      path: paths.reports 
    },
    { 
      title: 'Tags', 
      icon: Tag, 
      path: paths.tags 
    },
  ];

  const toggleSubmenu = (title: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/50 z-20 md:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 pt-[20px] left-0 z-30 w-[272px] h-screen rounded-[16px] bg-[#527088] text-white
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:z-0 font-['Sofia']
        `}
      >
        {/* Mobile close button */}
        <button
          className="absolute p-2 text-white top-4 right-4 md:hidden"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <div className="p-[16px] flex gap-2">
          <img src="Sidebar/Group.png" alt="logo"/>
          <h1 className="text-2xl font-bold">CarbonCred</h1>
        </div>
        
        {/* Navigation Menu - Scrollable */}
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <li key={item.path}>
                  <div>
                    {item.subTitles ? (
                      <div 
                        onClick={() => toggleSubmenu(item.title)}
                        className={`
                          flex items-center justify-between gap-3 px-4 py-3
                          transition-colors duration-200 cursor-pointer
                          ${isActive ? 'bg-[#0E1E2B]' : 'hover:bg-[#0E1E2B]/50'}
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={20} />
                          <span>{item.title}</span>
                        </div>
                        {openMenus[item.title] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`
                          flex items-center gap-3 px-4 py-3
                          transition-colors duration-200
                          ${isActive ? 'bg-[#0E1E2B]' : 'hover:bg-[#0E1E2B]/50'}
                        `}
                      >
                        <Icon size={20} />
                        <span>{item.title}</span>
                      </Link>
                    )}
                    
                    {/* Submenu */}
                    {item.subTitles && openMenus[item.title] && (
                      <div className="pl-10 space-y-1">
                        {item.subTitles.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.path || item.path}
                            className="
                              flex items-center gap-3 px-4 py-2 text-sm 
                              hover:bg-[#0E1E2B]/50
                            "
                          >
                            {subItem.icon && (
                              <img 
                                src={subItem.icon} 
                                alt={subItem.title} 
                                className="w-5 h-5 mr-2" 
                              />
                            )}
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
        
        {/* Fixed Bottom Buttons */}
        <div className="py-4">
          <Link
            to={paths.profile}
            className="flex items-center gap-3 px-4 w-full py-3 text-left text-white hover:bg-[#0E1E2B]/50 transition-colors duration-200"
          >
            <User size={20} />
            <span>Profile</span>
          </Link>
          <button
            className="flex items-center px-4 gap-3 w-full py-3 text-left text-white hover:bg-[#0E1E2B]/50 transition-colors duration-200"
            onClick={() => logout()}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default SideBar;