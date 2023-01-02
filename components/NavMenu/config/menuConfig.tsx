import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import { IMenuItem } from "../types";

export const menuItems: IMenuItem[] = [
  {
    path: "/drive",
    name: "文件",
    icon: (
      <DescriptionRoundedIcon color="action" style={{ marginRight: "16px" }} />
    ),
  },
  {
    path: "/album",
    name: "相册",
    icon: (
      <DescriptionRoundedIcon color="action" style={{ marginRight: "16px" }} />
    ),
  },
  {
    path: "/starred",
    name: "收藏夹",
    icon: (
      <DescriptionRoundedIcon color="action" style={{ marginRight: "16px" }} />
    ),
  },
  {
    path: "/subscription",
    name: "订阅",
    icon: (
      <DescriptionRoundedIcon color="action" style={{ marginRight: "16px" }} />
    ),
  },
  {
    path: "/recycle-bin",
    name: "垃圾箱",
    icon: (
      <DescriptionRoundedIcon color="action" style={{ marginRight: "16px" }} />
    ),
  },
];
