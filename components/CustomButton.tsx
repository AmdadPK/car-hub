"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({title, cantainerStyles, handleClick, btnType}: CustomButtonProps) => {
  return (
    <button
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${cantainerStyles}`}
    onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  )
}

export default CustomButton