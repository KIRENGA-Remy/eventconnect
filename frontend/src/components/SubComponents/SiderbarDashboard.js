import React from 'react';
import { FaTachometerAlt, FaChartBar, FaTable, FaBell, FaIcons, FaMap, FaUser, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const menuItems = [
  { icon: <FaTachometerAlt />, label: 'Dashboard', path: '/dashboard' },
  { icon: <FaPlus />, label: 'Create event', path: '/create' },
  { icon: <FaChartBar />, label: 'Widgets', path: '/widgets' },
  { icon: <FaTable />, label: 'Tables', path: '/tables' },
  { icon: <FaBell />, label: 'Notifications', path: '/notifications' },
  { icon: <FaIcons />, label: 'All events', path: '/allevents' },
  { icon: <FaMap />, label: 'Maps', path: '/maps' },
  { icon: <FaUser />, label: 'Profile', path: '/profile' },
  // Add more items as needed
];

function SidebarDashboard() {
  return (
    <div className="w-72 bg-gray-800 text-white py-8 md:block">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center justify-items-start py-2 hover:bg-gray-700 cursor-pointer">
            <Link to={item.path} className="flex items-center w-full p-4">
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarDashboard;
