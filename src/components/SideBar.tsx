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
      icon: '/Sidebar/TripLog.svg',
      path: paths.tripLog,
    },
    {
      title: 'Profile',
      icon: '/Sidebar/ProfileActive.svg',
      activeIcon: '/Sidebar/ProfileActive.svg',
      path: paths.profile,
      subTitles: [
        {
          title: 'Users Profiles',
          icon: '/Sidebar/Users Profiles Icons.svg',
          path: paths.profile,
        },
        {
          title: 'Individual User Information',
          icon: '/Sidebar/User Info.svg',
          path: paths.individualUserInfo,
        },
      ],
    },
    {
      title: 'Reports',
      icon: '/Sidebar/Reports.svg',
      activeIcon: '/Sidebar/ReportsActive.svg',
      path: paths.trips,
      subTitles: [
        {
          title: 'Total Trips',
          icon: '/Sidebar/Total Trips Happened & Miles Saved.svg',
          path: paths.trips,
        },
        {
          title: 'Total Miles Saved',
          icon: '/Sidebar/Co2Avoided.svg',
          path: paths.mileSaved,
        },
        {
          title: 'Total Users',
          icon: '/Sidebar/Total Users.svg',
          path: paths.totalUser,
        },
        {
          title: 'Total Creds Earned & Redeemed',
          icon: '/Sidebar/TotalCredsEarned.svg',
          path: paths.totalCreds,
        },
        {
          title: 'CO2 Avoided',
          icon: '/Sidebar/CO2 Avoided.svg',
          path: paths.co2Avoided,
        },
      ],
    },
    {
      title: 'Dashboard Control',
      icon: '/Sidebar/Dashboard Contrpl.svg',
      path: paths.dashboard,
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
    <div className="m-[1vh] relative">
      {/* Overlay for mobile */}
      <div
        className={`absolute top-0 left-0 right-0 bg-black/50 z-20 md:hidden ${isOpen ? 'block' : 'hidden'}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-30 w-[272px] h-[98vh] rounded-[16px] text-[#175AB6] bg-[#F8FAFF]
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? '' : '-translate-x-full'}
          md:translate-x-0 md:static md:z-0
        `}
      >
        {/* Mobile close button */}
        <button
          className="absolute p-2 text-black top-4 right-4 md:hidden"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <div className="px-[16px] pt-[50px] pb-[16px] flex gap-2">
         <div className='w-full text-center '>MSME</div>
        </div>

        {/* Navigation Menu - Scrollable */}
        <nav className="flex-1 overflow-y-auto ">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path || 
              (item.subTitles?.some(subItem => location.pathname === subItem.path) ?? false);
              
              return (
                <li key={item.path}>
                  <div>
                    {item.subTitles ? (
                      <div
                        onClick={() => toggleSubmenu(item.title)}
                        className={`
                          flex items-center justify-between gap-3 px-4 py-3
                          transition-colors duration-400 cursor-pointer
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
                          ${isActive ? 'bg-[#DAE5FF]' : 'hover:bg-[#DAE5FF]/50'}
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
                      <div className="space-y-2 text-[#0E1E2B] bg-white ">
                        {item.subTitles.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.path || item.path}
                            className="
                              flex duration-200 text-[#175AB6] items-center pl-8 gap-1 py-2 
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
        <div className="pb-2">
          <Link
            to={paths.profile}
            className="flex items-center w-full gap-3 px-4 py-3 text-left  text-[#175AB6]  bg-[#F8FAFF] hover:bg-[#DAE5FF]/50 duration-200"
          >
            <img
              src="/Sidebar/Profiles.svg"
              className="w-[20px] h-[20px]"
              alt="logo"
            />
            <span>Profile</span>
          </Link>
          <button
            className="flex items-center w-full gap-3 px-4 py-3 text-left transition-colors duration-200 text-[#175AB6]  bg-[#F8FAFF] hover:bg-[#DAE5FF]/50'"
            onClick={() => logout()}
          >
            <img
              src="/Sidebar/Log Out.svg"
              className="w-[20px] h-[20px]"
              alt="logo"
            />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
