import classNames from "classnames";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import cow from "@/assets/image/cow.webp";
import { menuItems } from "../config/menuConfig";
import styles from "./NavMenu.module.scss";

const NavMenu = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <>
      <div className={styles.titleContainer}>
        <Image
          src={cow}
          alt=""
          width={50}
          height={50}
          className={styles.titleIcon}
        />
        <h1 className={styles.title}>牛牛网盘</h1>
      </div>
      {/* 导航栏 */}
      <ul className={styles.menuContainer}>
        {menuItems.map(item => (
          <li
            className={classNames({
              [styles.menuItem]: true,
              [styles.menuItemActive]: pathname === item.path,
            })}
            onClick={() => {
              router.push(item.path);
            }}
            key={item.path}
          >
            <DescriptionRoundedIcon
              color="action"
              style={{ marginRight: "16px" }}
            />
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
