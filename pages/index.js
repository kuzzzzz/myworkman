import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";



export default function Home() {
  return (
    <>
      <Head>
        <title>My Work Man Org| Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          The My-Work-Man Organization is an initiative that strives to connect
          pure bread entrepreneurs who want to take their business to the next
          level with various opportunities on the internet and also with other
          entrepreneurs
        </p>
        <p className={styles.text}>
          We host a talk show every week to discuss various ways and brainstorm
          ideas on how you can start a mega-successful business in Nigeria and
          if you already have a business how you can use the power of the
          internet along with other tools to 10x your results.
        </p>
        <p className={styles.text}>
          Full disclaimer we are not experts we are also entrepreneurs like you
          and we are open to constructive criticism and ideas on how we can also
          improve this space.
        </p>
        <p className={styles.text}>
          Let's all win together and change the narrative of the Nigerian youth,
          we are strong, we are dedicated and we've got this, let's make this
          country great together join us on this wonderful ride.
        </p>
        <Link href="/shows/">
          <a className={styles.btn}>See Shows</a>
        </Link>
      </div>
    </>
  );
}
