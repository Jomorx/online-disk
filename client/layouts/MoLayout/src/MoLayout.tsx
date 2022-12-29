import React, { ReactNode, useState } from "react";
import { MoAside } from "@/layouts/MoAside";
import { MoHeader } from "@/layouts/MoHeader";
import styles from "./MoLayout.module.scss";

const MoLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  return (
    <div className={`App ${styles.layout}${darkTheme ? " dark" : ""}`}>
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
