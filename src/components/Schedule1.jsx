import React, { useState } from "react";
import Schedule from "./Schedule";
import { DatePicker } from "antd";
const Schedule1 = () => {
  const [tab, setTab] = useState(0);
  const tabHandler = (e) => {
    setTab(e.target.innerText === "Swimming" ? 0 : 1);
  };
  return (
    <div>
      <div className="text-2xl font-bold mb-4 mt-2">Schedule</div>
      <div className="flex mb-4">
        <DatePicker className="" />
        <div className="ml-2 text-sm font-semibold bg-zinc-200 dark:bg-zinc-900 p-1 rounded-sm text-center dark:text-white text-black">
          <button
            className={`p-1.5 rounded-sm px-8 mr-1.5 ${
              tab == 0 ? " bg-white" : ""
            }`}
            onClick={tabHandler}
          >
            Swimming
          </button>
          <button
            className={`p-1.5 rounded-sm px-8 ${tab == 1 ? "bg-white" : ""}`}
            onClick={tabHandler}
          >
            Badminton
          </button>
        </div>
      </div>
      <Schedule />
    </div>
  );
};

export default Schedule1;
