import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { useAppSelector } from "@/hooks/useStore";
import styles from "./MoHeader.module.scss";

const MoHeader: React.FC<{
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
  darkTheme: boolean;
}> = ({ setDarkTheme, darkTheme }) => {
  const { title } = useAppSelector(state => state.headerStore);
  return (
    <div className={styles["header-container"]}>
      <h3>{title}</h3>
      <div
        style={{ marginRight: "20px" }}
        onClick={() => setDarkTheme(prev => !prev)}
      >
        {/* 夜间模式按钮 */}
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={darkTheme ? "on" : "off"}
            classNames={{
              enterActive: styles["icon-enter-active"],
            }}
            timeout={300}
          >
            {darkTheme ? <DarkModeIcon /> : <LightModeIcon />}
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default MoHeader;
