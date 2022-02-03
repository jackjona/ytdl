import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Footer from "../components/Footer";
import {
  BsFillLightningChargeFill,
  BsSpeedometer,
  BsCash,
} from "react-icons/bs";
import { FaMobile } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          YTDL - The Simple &amp; Easy To Use Youtube Video/Audio Downloader
        </title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#1A202C"></meta>
      </Head>
      <ChakraProvider theme={theme}>
        <Navbar />
        <main className="flex flex-1 flex-col items-center justify-center px-2 sm:px-40 text-center">
          <h1 className="mt-4 text-6xl font-bold">YTDL</h1>
          <h2 className="mt-8 font-bold text-2xl">
            The <span className="text-blue-600">Simple</span> &amp;{" "}
            <span className="text-blue-600">Easy</span> To Use Youtube
            Video/Audio Downloader
          </h2>
          <p className="mt-6 mb-2 text-lg pb">
            Get started by searching or pasting your YouTube link below.
          </p>
          <Main />
          <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            <a className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-indigo-500 focus:text-indigo-500">
              <h3 className="text-2xl uppercase font-bold">
                <BsFillLightningChargeFill /> Fast and easy to use
              </h3>
              <p className="mt-4 text-xl">
                Using YTDL is simple and intuitive. Just paste your desired
                Youtube link, search using keywords, or replace{" "}
                <code>www.youtube.com</code> with <code>backend.ytdl.cf</code>{" "}
                to download.
              </p>
            </a>
            <a className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-indigo-500 focus:text-indigo-500">
              <h3 className="text-2xl uppercase font-bold">
                <BsSpeedometer /> Without limitation
              </h3>
              <p className="mt-4 text-xl">
                Download and convert YouTube videos as much as you want without
                limitation! We never restrict our users. All popular formats
                supported including MP4, MP3, FLV and MOV.
              </p>
            </a>

            <a className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-indigo-500 focus:text-indigo-500">
              <h3 className="text-2xl uppercase font-bold">
                <FaMobile /> All platforms are supported
              </h3>
              <p className="mt-4 text-xl">
                This website was built in a mobile-first approch. This works on
                mobile as well as desktops without needing to download or
                installing additional software.
              </p>
            </a>

            <a className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-indigo-500 focus:text-indigo-500">
              <h3 className="text-2xl uppercase font-bold">
                <BsCash /> Forever Free
              </h3>
              <p className="mt-4 text-xl">
                YTDL will always remain free. No registering or accounts will be
                needed. We will never sell user data and your personal info. The
                best way to support us is by sharing this website with others.
              </p>
            </a>
          </div>
        </main>
        <div className="mt-16 w-10/12 sm:w-6/12 py-5 bg-indigo-500 h-full text-center text-gray-900 rounded-xl">
          <h3 className="text-2xl uppercase font-bold underline mb-4">
            Disclaimer:
          </h3>
          <p className="capitalize text-lg font-semibold p-2">
            Do not download any copyrighted materials without permission.
          </p>
        </div>
        <br />
        <div className="w-full border-t mt-10 text-center">
          <Footer />
        </div>
      </ChakraProvider>
    </div>
  );
}

