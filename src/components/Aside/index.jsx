import Image from "next/image";
import styles from "./aside.module.css";

import logo from "./logo.png"
import Link from "next/link";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      {/* <img src={logo} alt="logo" /> */}
      <Link href='/'>
        <Image src={logo} alt="Logo da Code Connect" />
      </Link>
    </aside>)
}
