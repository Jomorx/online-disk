import classNames from "classnames";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";
import cow from "@/assets/image/cow.webp";
import { menuItems } from "../config/menuConfig";
import styles from "./NavMenu.module.scss";
import useMatchMenu from "../hooks/useMatchMenu";

const NavMenu = () => {
  const router = useRouter();
  const { pathname } = router;
  useMatchMenu(pathname);
  return (
    <>
      {/* 网站名称以及icon */}
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
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
