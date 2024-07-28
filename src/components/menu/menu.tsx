"use client";
import { useActivePath } from "@alisa/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuItem } from "./menu-item";
import style from "./menu.module.css";

export function Menu() {
  let [isMenuOpened, setIsMenuOpened] = useState(false);
  const activePath = useActivePath();
  const pathname = usePathname();
  const classes = style.menu + " " + activePath("/", style.white);

  useEffect(() => {
    setIsMenuOpened(false);
  }, [pathname]);

  return (
    <nav
      className={
        classes + " " + (isMenuOpened ? style.menuContainerOpened : "")
      }
    >
      <div className={style.icons}>
        <Link href="/" title="home" className={style.homeIcon}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </Link>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={style.menuIcon + " " + (isMenuOpened ? style.hidden : " ")}
          onClick={() => setIsMenuOpened(true)}
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>

        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          stroke-width="1"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={
            style.closeIcon + " " + (isMenuOpened ? " " : style.hidden)
          }
          onClick={() => setIsMenuOpened(false)}
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>

      <div
        className={
          style.menuItems + " " + (isMenuOpened ? style.menuOpened : "")
        }
      >
        <MenuItem
          title="Films"
          sections={[
            {
              title: "No People Here Apart From Myself",
              link: "/films/no-people",
            },
            {
              title: "Backyard",
              link: "/films/backyard",
            },
          ]}
        />

        <MenuItem
          title="Publications"
          sections={[
            {
              title: "No People Here Apart From Myself",
              link: "/publications/no-people",
            },
            {
              title: "Inter 7 - Motion After Land",
              link: "/publications/inter-7",
            },
          ]}
        />

        <MenuItem
          title="Spaces"
          sections={[
            {
              title: "Space within Level 1: Chaos",
              link: "/spaces/chaos",
            },
            {
              title: "Space within Level 2: Circular order",
              link: "/spaces/circular-order",
            },
            {
              title: "Space within Level 3: Systematic order",
              link: "/spaces/systematic-order",
            },
            {
              title: "Universal space",
              link: "/spaces/universal-space",
            },
            {
              title: "The Play",
              link: "/spaces/the-play",
            },
            {
              title: "Home",
              link: "/spaces/home",
            },
          ]}
        />

        <MenuItem
          title="Fragments"
          sections={[
            {
              title: "Isle of Mull",
              link: "/fragments/mull",
            },
            {
              title: "Tables",
              link: "/fragments/tables",
            },
            {
              title: "Dorset",
              link: "/fragments/dorset",
            },
          ]}
        />
      </div>
    </nav>
  );
}
