import Image from "next/image";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Toast from "../components/Toast";

const contact = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <div className="flex flex-col items-center justify-center pt-4">
          <Navbar />
        </div>
        <div className="text-gray-100 px-8 py-12">
          <div className="text-center w-full"></div>
          <div className="max-w-screen-xl mt-32 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
            <div className="flex flex-col justify-between text-center sm:text-left mt-10">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Feel Free To Contact Us!
                </h2>
                <div className="text-gray-700 mt-8">
                  Don't like forms? forms? Send us an{" "}
                  <a href="mailto:contact@ytdl.cf" className="underline">
                    email
                  </a>{" "}
                  instead.
                </div>
              </div>
              <div className=" sm:mr-10">
                <Image src="/work-contact.svg" width={512} height={512} />
              </div>
            </div>
            <form
              action="https://send.pageclip.co/SO0KUhStjP7kPi7XKpEy057kbsZOJyQZ"
              method="post"
              className="mt-0 sm:mt-16"
            >
              <div>
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Full Name
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                  placeholder=""
                  required
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Email
                </span>
                <input
                  className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  type="text"
                  name="email"
                  required
                />
              </div>
              <div className="mt-8">
                <span className="uppercase text-sm text-gray-600 font-bold">
                  Message
                </span>
                <textarea
                  name="message"
                  className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="mt-8">
                <Toast />
              </div>
            </form>
          </div>
        </div>
        <div className="border-t sm:mt-40 text-center">
          <Footer />
        </div>
      </ChakraProvider>
    </>
  );
};

export default contact;

