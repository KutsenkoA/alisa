import { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import style from "./page.module.css";

export const metadata: Metadata = {};

export default function Page() {
  return (
    <>
      <Script
        src={"./node_modules/feather-icons/dist/feather.js"}
        strategy={"beforeInteractive"}
      />

      <video muted autoPlay loop className={style.sheep}>
        <source src="sheep1.mp4" type="video/mp4" />
      </video>

      <Link href={"/information"} className={style.readMoreContainer}>
        <span className={style.readMore}>read more</span>
        <span className={style.dash}></span>
        <span className={style.readMoreArrow}>&#10230;</span>
        <span className={style.readMoreE1}>E1</span>
      </Link>
    </>
  );
}
