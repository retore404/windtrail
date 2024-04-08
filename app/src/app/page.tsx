import Link from "next/link";
import styles from "./page.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Windtrail2",
  description: "Logging posts on Bluesky Social.",
};

export default function Home() {
  return (
    <main>
      <Link href={`/retore.bsky.social`}>retore.bsky.social</Link>
    </main>
  );
}
