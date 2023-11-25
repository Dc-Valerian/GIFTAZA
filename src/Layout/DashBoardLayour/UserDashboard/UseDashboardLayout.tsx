import SideNav from "./SideBar";
import { Outlet } from "react-router-dom";

const UseDashboardLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideNav />
      <Outlet />
    </div>
  );
};

export default UseDashboardLayout;
