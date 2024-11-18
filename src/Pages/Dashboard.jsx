import { NavLink, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-2">
        <NavLink
          className="rounded-lg py-2 px-4 text-center bg-blue-600 text-gray-200 font-semibold"
          to="profile"
        >
          Profile
        </NavLink>
        <NavLink
          className="rounded-lg py-2 px-4 text-center bg-blue-600 text-gray-200 font-semibold"
          to="payments"
        >
          Payments
        </NavLink>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
