import { ReactNode } from "react";

type IIconButtonColor =
  | "inherit"
  | "default"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning"
  | undefined;

export interface IMoTooltipWrapper {
  children: ReactNode;
  title: string;
  color?: IIconButtonColor;
}
