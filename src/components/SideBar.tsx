import React, { useState } from 'react';
import { X, ChevronDown, ChevronRight } from 'lucide-react';
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
  icon: string;
  path: string;
  activeIcon?: string;
  subTitles?: SubMenuItem[];
}

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const { logout } = useAuth();
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const menuItems: MenuItem[] = [
    {
      title: 'Overview',
      icon: '/Sidebar/Overview.svg',
      path: paths.overview,
    },
    {
      title: 'Trip Log',
      icon: '/Sidebar/Triplog.svg',
      path: paths.tripLog,
    },
    {
      title: 'Profile',
      icon: '/Sidebar/Profile.svg',
      activeIcon: '/Sidebar/ProfileActive.svg',
      path: paths.profile,
      subTitles: [
        {
          title: 'Users Profiles',
          icon: '/Sidebar/Users Profiles Icons.png',
          path: paths.profile,
        },
        {
          title: 'Individual User Information',
          icon: '/Sidebar/User Info.png',
          path: paths.profile,
        },
      ],
    },
    {
      title: 'Dashboard Control',
      icon: '/Sidebar/Dashboard Contrpl.svg',
      path: paths.dashboard,
    },
    {
      title: 'Reports',
      icon: '/Sidebar/Reports.svg',
      path: paths.reports,
    },
    {
      title: 'Tags',
      icon: '/Sidebar/Tags.svg',
      path: paths.tags,
    },
  ];

  const toggleSubmenu = (title: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="m-[1vh]">
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black/50 z-20 md:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 pt-[20px] left-0 z-30 w-[272px] h-[98vh] rounded-[16px] bg-[#527088] text-white
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:static md:z-0
        `}
      >
        {/* Mobile close button */}
        <button
          className="absolute p-2 text-white top-4 right-4 md:hidden"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <div className="px-[16px] pt-[50px] pb-[16px] flex gap-2">
          <img src="Sidebar/Frame.png" alt="logo" />
        </div>

        {/* Navigation Menu - Scrollable */}
        <nav className="flex-1 overflow-y-auto ">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <li key={item.path}>
                  <div>
                    {item.subTitles ? (
                      <div
                        onClick={() => toggleSubmenu(item.title)}
                        className={`
                          flex items-center justify-between gap-3 px-4 py-3
                          transition-colors duration-200 cursor-pointer
                          ${isActive ? 'bg-[#DAE5FF]' : 'hover:bg-[#0E1E2B]/50'} 
                          ${isActive ? 'text-[#175AB6]' : 'hover:bg-[#0E1E2B]/50'}
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={isActive ? item?.activeIcon : item.icon}
                            className={`w-[20px] h-[20px]`}
                            alt="logo"
                          />
                          <span>{item.title}</span>
                        </div>
                        {openMenus[item.title] ? (
                          <ChevronDown size={20} />
                        ) : (
                          <ChevronRight size={20} />
                        )}
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
                        <img
                          src={item.icon}
                          className="w-[20px] h-[20px]"
                          alt="logo"
                        />
                        <span>{item.title}</span>
                      </Link>
                    )}

                    {/* Submenu */}
                    {item.subTitles && openMenus[item.title] && (
                      <div className="space-y-1 text-[#0E1E2B] bg-white px-0">
                        {item.subTitles.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.path || item.path}
                            className="
                              flex items-center gap-1 py-2 
                              hover:bg-[#0E1E2B]/50 px-4
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
        <div className="pb-2">
          <Link
            to={paths.profile}
            className="flex items-center gap-3 px-4 w-full py-3 text-left text-white hover:bg-[#0E1E2B]/50 transition-colors duration-200"
          >
            <img src="/Sidebar/Profiles.svg" className="w-[20px] h-[20px]" alt="logo" />
            <span>Profile</span>
          </Link>
          <button
            className="flex items-center px-4 gap-3 w-full py-3 text-left text-white hover:bg-[#0E1E2B]/50 transition-colors duration-200"
            onClick={() => logout()}
          >
            <img src="/Sidebar/Log Out.svg" className="w-[20px] h-[20px]" alt="logo" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
