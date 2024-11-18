import { NavLink } from "react-router-dom";

function AppNav() {
  return (
    <nav className="bg-blue-800 text-gray-100 font-bold rounded-lg mb-10">
      <ul className="flex items-center justify-center gap-2 py-3">
        <li>
          <NavLink
            className="border border-gray-300 rounded-full py-1 px-4 hover:bg-gray-300 hover:text-blue-950"
            to={"/app"}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              "border border-gray-300 rounded-full py-1 px-4 hover:bg-gray-300 hover:text-blue-950"
            }
            to={"posts"}
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              "border border-gray-300 rounded-full py-1 px-4 hover:bg-gray-300 hover:text-blue-950"
            }
            to={"dashboard"}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={
              "border border-gray-300 rounded-full py-1 px-4 hover:bg-gray-300 hover:text-blue-950"
            }
            to={"login"}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
