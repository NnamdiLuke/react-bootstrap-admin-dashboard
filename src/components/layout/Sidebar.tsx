import {
  BarChart,
  LayoutDashboard,
  Settings,
  ShoppingBag,
  SidebarIcon,
  User,
  X
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar({
  sideBarCollapsed,
  setSideBarCollapsed,
  mobileOpen,
  setMobileOpen,
  isMobile
}: any) {

  return (
    <div
      className={`sidebar vh-100 d-flex flex-column px-1 pt-2 bg-dark text-white
      ${sideBarCollapsed ? "w-20" : "w-72"}
      ${mobileOpen ? "sidebar-open" : ""}
      `}
    >
      <div className="d-flex justify-content-between mb-3 align-items-center">
        {!sideBarCollapsed && (
          <span className="bg-primary mb-2 rounded-circle ms-3 px-2 py-1 fs-6 fw-bold">
            M
          </span>
        )}

        <div className="d-flex align-items-center gap-2 me-2">
          {isMobile && (
            <X
              size={22}
              className="cursor-pointer"
              onClick={() => setMobileOpen(false)}
            />
          )}

          {!isMobile && (
            <SidebarIcon
              size={24}
              onClick={() =>
                setSideBarCollapsed(!sideBarCollapsed)
              }
              className="cursor-pointer ms-3"
            />
          )}
        </div>
      </div>

      <ul className="flex-grow-1 d-flex flex-column gap-4 sidebar-menu">

        <NavLink
          to="/"
          className={({ isActive }) =>
            `sidebar-link text-decoration-none d-flex align-items-center gap-2 px-3 py-2 rounded ${
              isActive ? "active-link text-white" : "text-secondary"
            }`
          }
          onClick={() => isMobile && setMobileOpen(false)}
        >
          <LayoutDashboard size={18} />
          {!sideBarCollapsed && <span>Dashboard</span>}
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            `sidebar-link text-decoration-none d-flex align-items-center gap-2 px-3 py-2 rounded ${
              isActive ? "active-link text-white" : "text-secondary"
            }`
          }
          onClick={() => isMobile && setMobileOpen(false)}
        >
          <User size={18} />
          {!sideBarCollapsed && <span>Users</span>}
        </NavLink>

        <NavLink
          to="/products"
          className={({ isActive }) =>
            `sidebar-link text-decoration-none d-flex align-items-center gap-2 px-3 py-2 rounded ${
              isActive ? "active-link text-white" : "text-secondary"
            }`
          }
          onClick={() => isMobile && setMobileOpen(false)}
        >
          <ShoppingBag size={18} />
          {!sideBarCollapsed && <span>Products</span>}
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            `sidebar-link text-decoration-none d-flex align-items-center gap-2 px-3 py-2 rounded ${
              isActive ? "active-link text-white" : "text-secondary"
            }`
          }
          onClick={() => isMobile && setMobileOpen(false)}
        >
          <BarChart size={18} />
          {!sideBarCollapsed && <span>Reports</span>}
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `sidebar-link text-decoration-none d-flex align-items-center gap-2 px-3 py-2 rounded ${
              isActive ? "active-link text-white" : "text-secondary"
            }`
          }
          onClick={() => isMobile && setMobileOpen(false)}
        >
          <Settings size={18} />
          {!sideBarCollapsed && <span>Settings</span>}
        </NavLink>
      </ul>

      <div className="my-4 px-3">User Profile</div>
    </div>
  );
}

export default Sidebar;