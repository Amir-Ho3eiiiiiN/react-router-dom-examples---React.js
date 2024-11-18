import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Button from "../components/Button";

function LoginForm() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="h-full w-full relative ">
      <div
        className={`  p-6 border rounded-lg shadow-lg w-1/3 max-w-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
      >
        <h3 className={` text-lg text-center font-bold mb-5`}>Login Form</h3>
        <div className="flex flex-col gap-2 items-center ">
          <div className="w-full rounded-full shadow-md overflow-hidden relative mb-2">
            <input
              type="text"
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="px-4 py-3 w-full border-none focus:outline-none"
            />
            <UserIcon className="size-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
          <div className="w-full rounded-full shadow-md overflow-hidden relative mb-8">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3  w-full border-none rounded-full shadow-md focus:outline-none"
            />
            <LockClosedIcon className="size-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
