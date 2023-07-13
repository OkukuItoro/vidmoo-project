"use client";
import { CustomButtonProps } from "@/types";
import { BsFillPlayFill } from "react-icons/bs";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && <BsFillPlayFill color="inherit" />}
    </button>
  );
};

export default CustomButton;
