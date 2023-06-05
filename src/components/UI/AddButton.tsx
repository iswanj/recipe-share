"use client";
import { PlusOutlined } from "@ant-design/icons";
import { FC } from "react";

interface AddButtonProps {}

const AddButton: FC<AddButtonProps> = ({}) => {
  return (
    <button className=" flex bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded raw">
      <PlusOutlined className="mr-2" />
      <span className="leading-4">New Recipe</span>
    </button>
  );
};

export default AddButton;
