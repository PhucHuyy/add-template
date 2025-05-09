// src/components/layout/Sidebar.tsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './sidebar.css';

const menuItems = [
  { title: 'Dashboard', icon: 'fa fa-tachometer-alt', path: '/admin' },
  // { title: 'Users', icon: 'fa fa-users', path: '/admin/users' },
  // { title: 'Settings', icon: 'fa fa-cogs', path: '/admin/settings' },
  { title: 'Student accounts', icon: 'fa fa-user-graduate', path: '/admin/students-account' },
  { title: 'Business accounts', icon: 'fa fa-briefcase', path: '/admin/business-account' },
  { title: "Staff admins", icon: "fa fa-user-tie", path: "/admin/staff-admins" },
  { title: 'Banned accounts', icon: 'fa fa-user-slash', path: '/admin/banned-account' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className={`custom-sidebar ${collapsed ? 'collapsed' : ''}`} onMouseEnter={() => setCollapsed(false)} onMouseLeave={() => setCollapsed(true)}>
      <div className="sidebar-header">
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item, idx) => (
          <li key={idx}>
            <NavLink to={item.path} className="menu-link">
              <i className={item.icon}></i>
              {!collapsed && <span className="menu-title">{item.title}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
