"use client";
import { useActivePath } from "@alisa/hooks";
import Link from "next/link";
import style from "./menu-item.module.css";

interface Section {
  title: string;
  link: string;
}

export function MenuItem(props: { title: string; sections: Section[] }) {
  const checkActivePath = useActivePath();

  return (
    <div className={style.page}>
      <div>{props.title}</div>
      <ul>
        {props.sections.map((section) => (
          <li key={section.title}>
            <Link
              href={section.link}
              className={checkActivePath(section.link, style.active)}
            >
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
