import { Montserrat } from "next/font/google";
import React from "react";
import { Menu } from "@alisa/components";
import styles from "./styles.module.css";

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
      </body>
    </html>
  );
}
