import React, { ReactNode } from "react";
import { MoAside } from "@/layouts/MoAside";
import { MoHeader } from "@/layouts/MoHeader";
import styles from "./MoLayout.module.scss";

const index: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <header className={styles["layout-header"]}>
        <MoHeader />
      </header>

      <main>
        <MoAside />
        {children}
      </main>
    </div>
  );
};

export default index;
