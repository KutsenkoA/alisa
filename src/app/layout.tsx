import { Menu } from "@alisa/components";
import { Montserrat } from "next/font/google";
import React from "react";
import styles from "./styles.module.css";
import "./styles.global.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className={styles.body}>
        <Menu />

        {children}

        <footer className={styles.footer}>
          <a href={"https://www.instagram.com/_alisakutsenko"}>instagram</a>
          &nbsp;&nbsp;&nbsp;
          <a href={"mailto:alisa.kutsenko@gmail.com"}>email</a>
        </footer>
      </body>
    </html>
  );
}
