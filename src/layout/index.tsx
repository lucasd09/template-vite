import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
