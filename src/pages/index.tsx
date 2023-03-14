import Head from "next/head";
import classes from "./Welcome.module.css";
import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PolyglotAI</title>
      </Head>
      <div className="relative flex w-screen items-center justify-center p-20">
        <div className={classes["text-box"]}>
          <h2 className={classes.slogan1}>Learn languages</h2>
          <h2 className={classes.slogan2}>the easy way</h2>
          <Image
            className={`${classes.slogan3} lg:left-100 xl:left-100`}
            alt="Polyglot AI"
            width="400"
            height="200"
            src="/../public/images/polyglot.png"
          />
        </div>
        <Image
          className="fixed top-1/4 left-1/2 opacity-20"
          alt="Polyglot AI"
          width="500"
          height="500"
          src="/../public/images/splotch.png"
        />
      </div>
    </>
  );
};

export default Home;
