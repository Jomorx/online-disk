import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import styles from "./MoHeader.module.scss";

const MoHeader: React.FC<{
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
}> = ({ setDarkTheme, darkTheme }) => {
  return (
    <div className={styles["header-container"]}>
      <span>Header</span>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => setDarkTheme(prev => !prev)}
      >
        {darkTheme ? <DarkModeIcon /> : <LightModeIcon />}
      </div>
    </div>
  );
};

export default MoHeader;
