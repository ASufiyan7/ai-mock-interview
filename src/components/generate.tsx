import { Outlet } from "react-router";

export const Generate = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};