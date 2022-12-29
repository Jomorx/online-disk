import React from "react";
import { menuItems } from "../config/menuConfig";

const NavMenu = () => {
  return (
    <ul>
      {menuItems.map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
};

export default NavMenu;
