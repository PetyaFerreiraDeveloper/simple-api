import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Character from "@/components/Character";

const inter = Inter({ subsets: ["latin"] });

const url = `https://swapi.dev/api/people`;

export async function getServerSideProps() {
  const res = await fetch(url);
  const data = await res.json();
  const result = data.results;
  return {
    props: {
      result,
    },
  };
}

export default function Home({ result }) {
  return (
    <div className="bg-gray-100 h-full flex">
      <Head>
        <title>Simple API</title>
        <meta name="description" content="Simple app build with nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="text-red-500 my-10">Main page</h1>
        <ul>
          {result.map((res, ind) => {
            return <Character ind={ind} character={res} />;
          })}
        </ul>
      </main>
    </div>
  );
}
