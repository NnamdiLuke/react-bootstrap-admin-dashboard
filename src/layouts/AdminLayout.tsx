import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import TopNavbar from "../components/layout/TopNavbar";
import type { ChildrenType } from "../type/component-props";
import { useEffect, useState } from "react";

function AdminLayout({ children }: ChildrenType) {
  const [sideBarCollapsed, setSideBarCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;

      setIsMobile(mobile);

      // RESET STATES WHEN SWITCHING SCREEN SIZE
      if (mobile) {
        setSideBarCollapsed(false);
      } else {
        setMobileOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Overlay */}
      {mobileOpen && isMobile && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div className="d-flex">
        <Sidebar
          sideBarCollapsed={sideBarCollapsed}
          setSideBarCollapsed={setSideBarCollapsed}
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
          isMobile={isMobile}
        />

        <div
          className="flex-grow-1"
          style={{
            marginLeft: isMobile
              ? "0"
              : sideBarCollapsed
              ? "80px"
              : "288px",
            transition: "margin-left 0.3s ease",
          }}
        >
          <TopNavbar
            setMobileOpen={setMobileOpen}
            isMobile={isMobile}
          />

          <main className="p-4 bg-light min-vh-100">
            <div>{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;