import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>VƯỜN HOA SỨ</title>
        <meta
          name="description"
          content="Dự án vũ trụ truyện thuộc MEO Studio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Chào mừng tới <a href="#">VƯỜN HOA SỨ!</a>
        </h1>
      </main>
    </div>
  );
}
