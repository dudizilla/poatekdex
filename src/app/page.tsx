import Image from "next/image";
import styles from "./page.module.css";
import { TypeTag } from "./components/TypeTag/typeTag";

export default function Home() {
  return (
    <main className={styles.main}>
      <TypeTag typeName={"psychic"} />
    </main>
  );
}
