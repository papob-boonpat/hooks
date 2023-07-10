import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          color: "#fff",
          height: 40,
          backgroundColor: "#232323",
        }}
      >
        Title
      </div>
      <Outlet />
      <div>hay</div>
    </div>
  );
}

export default Layout;
