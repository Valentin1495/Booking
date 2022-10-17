import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="mx-auto sm:max-w-xl sm:px-24 md:max-w-3xl md:px-32">
      <Head>
        <title>Uber 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <img
        src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Logo.png"
        alt="Uber Logo"
        className="h-24 w-24 object-contain mx-auto"
      />
      <div className="flex flex-col items-center gap-y-3">
        <Link href="/book">
          <button
            className="bg-gray-200 rounded-md w-40 flex flex-col 
          items-center pb-5"
          >
            <img
              src="https://links.papareact.com/3pn"
              alt="car"
              className="h-24 w-24 border ml-2.5 object-contain"
            />
            <p className="font-bold text-lg">Book a Ride</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
