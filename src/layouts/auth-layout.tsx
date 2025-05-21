import { Outlet } from "react-router-dom";

export default function AuthenticationLayout() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <Outlet />
      </div>
    </div>
  );
}
