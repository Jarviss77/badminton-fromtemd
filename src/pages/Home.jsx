import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import Form from "../components/Form";
import BookingCalendar from "../components/BookingCalendar";
import Schedule1 from "../components/Schedule1";
import { Input } from "antd";
const home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10 p-5 pt-4 pb-2">
        <div className="flex items-center">
          <Input
            type="text"
            className="p-1.5 border-2 border-slate-200 rounded-md w-[70%] shadow"
            placeholder="Type a command or search"
          />
          <div className="w-[30%] mx-2 ">
            <button className="rounded-md bg-slate-200 p-2 px-3 text-sm font-semibold mr-2">
              Dummy
            </button>
            <Button
              iconPosition="start"
              onClick={showModal}
              icon={<PlusOutlined />}
            >
              Book Ground
            </Button>
            <Modal
              title="Book Ground"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Form />
            </Modal>
          </div>
        </div>
        {/* <BookingCalendar /> */}
        <Schedule1 />
      </div>
    </div>
  );
};

export default home;
