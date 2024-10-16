import React from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineCalendarToday } from "react-icons/md";
import { BsPeople } from "react-icons/bs";
const Sidebar = () => {
  return (
    <div className="bg-zinc-900 text-white h-screen p-5 pt-5">
      <div className="text-2xl font-semibold mb-4">NEXUS</div>
      <div className="pt-3">
        <div className="flex items-center mb-2">
          <LuLayoutDashboard className="mr-2 " />
          <div>Dashboard</div>
        </div>
        <div className="flex items-center mb-2">
          <MdOutlineCalendarToday className="mr-2 " />
          <div>Schedule</div>
        </div>
        <div className="flex items-center mb-2">
          <BsPeople className="mr-2 " />
          <div>Customer</div>
        </div>
        <div className="flex items-center ">
          <LuLayoutDashboard className="mr-2 " />
          <div>Attendance</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
