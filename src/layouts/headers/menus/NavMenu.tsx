"use client";
import menu_data from "@/data/MenuData";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

const NavMenu = () => {
  const currentRoute = usePathname();

  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const isMenuItemActive = (menuLink: string) => {
    return currentRoute === menuLink;
  };

  const isSubMenuItemActive = (subMenuLink: string) => {
    return currentRoute === subMenuLink;
  };
  const [ROLE, setRole] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Prevents SSR issues
      const user = localStorage.getItem("user");
      try {
        setRole(user ? JSON.parse(user)?.role : null);
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        setRole(null);
      }
    }
  }, []);

  return (
    <ul>
      {menu_data.map((menu: any) => (
        <li key={menu.id}>
          <Link
            href={menu.link}
            onMouseEnter={() => setHoveredId(menu.id)}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              textDecoration: "none",
            }}
          >
            <span
              style={{
                color:
                  isMenuItemActive(menu.link) ||
                  hoveredId === menu.id ||
                  (menu.sub_menus &&
                    menu.sub_menus.some(
                      (sub_m: any) =>
                        sub_m.link && isSubMenuItemActive(sub_m.link)
                    ))
                    ? "#ffe000"
                    : "white",
                transition: "color 0.3s ease",
              }}
            >
              {menu.title}
            </span>
          </Link>
          {menu.has_dropdown && (
            <>
              {menu.sub_menus && (
                <ul className="submenu">
                  {menu.sub_menus.map((sub_m: any, i: any) => (
                    <li key={i}>
                      <Link
                        href={sub_m.link}
                        className={`${
                          sub_m.link && isSubMenuItemActive(sub_m.link)
                            ? "active"
                            : ""
                        }`}
                      >
                        {sub_m.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
