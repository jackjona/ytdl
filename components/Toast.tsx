import React from 'react';
import { useToast } from "@chakra-ui/react";

const Toast = () => {
const toast = useToast();
  return (
  <>
        <button
        type="submit" 
        className="uppercase text-sm font-bold tracking-wide bg-gradient-to-r from-violet-500 to-fuchsia-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
        onClick={() => {
          toast({
            title: "Submitted.",
            description: "Your Message Was Submitted, Thank You.",
            status: "success",
            duration: 9000,
            isClosable: true
          });
        }}
      >
        Send Message
      </button>
  </>
    );
};

export default Toast;
