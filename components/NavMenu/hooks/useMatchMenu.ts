import { useAppDispatch } from "@/hooks/useStore";
import { useCallback, useEffect } from "react";
import { changeHeaderAction } from "@/store/headerStore/headerStore";
import { menuItems } from "../config/menuConfig";

export default (pathname: string) => {
  const dispatch = useAppDispatch();
  const findMenuTitle = useCallback(
    (pathname: string) => {
      for (const menuItem of menuItems) {
        if (menuItem.path === pathname) {
          dispatch(changeHeaderAction(menuItem.name));
          break;
        }
      }
    },
    [dispatch]
  );
  // 当pathname发生变化的时候寻找title
  useEffect(() => {
    findMenuTitle(pathname);
  }, [findMenuTitle, pathname]);
};
