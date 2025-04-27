"use client";

import { useAuth } from "@/hooks/use-auth";
import { IconButton, MenuItem } from "./ui";
import { usePathname } from "next/navigation";

const menuItems = [
  { text: "Home", pathname: "/home" },
  { text: "Memórias", pathname: "memories" },
  // { text: "Encontrar fotógrafos", pathname: "photographers" },
  { text: "Configurações", pathname: "settings" },
];

export function MenuBar() {
  const pathname = usePathname();
  const { logOut } = useAuth();

  return (
    <header className="min-h-[70px] flex border-b-[1px] items-center px-8 border-b-border-neutral">
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
