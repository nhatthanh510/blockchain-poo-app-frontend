import React from "react";
import { Outlet, Link } from "react-router-dom";

const Dashboard = (props: React.PropsWithChildren) => {
  return (
    <div id="error-page">
      <h1>Dashboard page!</h1>
      <Link to={`/dashboard/1`}>Your Name</Link>
      <Outlet />
    </div>
  );
};

export default Dashboard;
