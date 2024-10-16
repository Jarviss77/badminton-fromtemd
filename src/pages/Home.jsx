import React from "react";
import Sidebar from "../components/Sidebar";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
const home = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10 p-5 pt-4">
        <div className="flex items-center">
          <input
            type="text"
            className="p-1.5 border-2 border-slate-200 rounded-md w-[70%] shadow"
            placeholder="Type a command or search"
          />
          <div className="w-[30%] mx-2 ">
            <button className="rounded-md bg-slate-200 p-2 px-3 text-sm font-semibold mr-2">
              Rent & Sell
            </button>
            <Button iconPosition="start" icon={<PlusOutlined />}>
              Add Customer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
