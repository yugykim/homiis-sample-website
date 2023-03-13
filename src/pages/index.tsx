import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import logo from "../../assets/homiis-logo-color.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <Image src={logo} width={100} alt={"logo"}/>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}
