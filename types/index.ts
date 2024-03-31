import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  cantainerStyles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}