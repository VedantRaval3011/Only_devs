"use client";
import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" height={14} width={14} alt="moon"></Image>
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "white" }
            : { right: 1, background: "#0f172a" }
        }
      ></div>
      <Image src="/sun.png" height={14} width={14} alt="sun"></Image>
    </div>
  );
};

export default ThemeToggle;
