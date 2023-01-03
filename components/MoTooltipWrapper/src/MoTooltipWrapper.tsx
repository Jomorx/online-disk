import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { IMoTooltipWrapper } from "../types";

const MoTooltipWrapper: React.FC<IMoTooltipWrapper> = ({
  children,
  title,
  color = "inherit",
}) => {
  return (
    <Tooltip title={title}>
      <IconButton color={color}>{children}</IconButton>
    </Tooltip>
  );
};

export default MoTooltipWrapper;
