import React, { ReactNode, useState } from "react";
import { MoAside } from "@/layouts/MoAside";
import { MoHeader } from "@/layouts/MoHeader";
import classnames from "classnames";
import styles from "./MoLayout.module.scss";

const MoLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  return (
    <div
      className={classnames({
        App: true,
        dark: darkTheme,
        [styles.layout]: true,
      })}
    >
      <aside className={styles.aside}>
        <MoAside />
      </aside>
      <main className={styles.main}>
        <header className={styles.header}>
          <MoHeader darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        </header>
        {children}
      </main>
    </div>
  );
};

export default MoLayout;
