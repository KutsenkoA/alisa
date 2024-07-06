"use client";
import Link from "next/link";
import { MenuItem } from "./menu-item";
import style from "./menu.module.css";

export function Menu() {
  return (
    <nav className={style.menu}>
      <Link href="/" title="home" className={style.home}>
        <img src="/icons/home.svg" alt="home" />
      </Link>

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
    </nav>
  );
}
