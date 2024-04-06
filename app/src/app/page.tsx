import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Link href={`/a`}>a</Link>
    </main>
  );
}
