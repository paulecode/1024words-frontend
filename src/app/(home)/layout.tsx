import React from "react";
import styles from "./layout.module.scss";
import { TopBar } from "@/components/composite/topBar/TopBar";
import { Sidebar } from "@/components/composite/sideBar/Sidebar";
import "@/app/globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.main}>
          <div className={styles.spaceholder}></div>
          <TopBar />
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
