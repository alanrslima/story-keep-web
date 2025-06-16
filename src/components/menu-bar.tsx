"use client";

import { useAuth } from "@/hooks/use-auth";
import { IconButton, MenuItem } from "./ui";
import { usePathname } from "next/navigation";
import classNames from "classnames";

const menuItems = [
  { text: "Home", pathname: "/home" },
  { text: "Memórias", pathname: "/memories" },
  // { text: "Encontrar fotógrafos", pathname: "photographers" },
  { text: "Configurações", pathname: "/settings" },
];

export type MenuBarProps = {
  scrolled: boolean;
};

export function MenuBar(props: MenuBarProps) {
  const pathname = usePathname();
  const { logOut } = useAuth();

  return (
    <header
      className={classNames(
        "min-h-[70px] flex items-center px-8 bg-background",
        { "shadow-2xl transition-shadow": props.scrolled }
      )}
    >
      <nav className="flex items-center justify-center gap-6 flex-1">
        {menuItems.map((item) => (
          <MenuItem
            href={{ pathname: item.pathname }}
            text={item.text}
            key={item.text}
            selected={pathname.includes(item.pathname)}
          />
        ))}
      </nav>
      <IconButton onClick={logOut} iconName="LogOut" />
    </header>
  );
}
