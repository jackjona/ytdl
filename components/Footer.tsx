import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

const Logo = (props: any) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.7821 41.3527C33.7821 36.8736 33.7821 32.5194 33.7821 28.1235C36.7081 28.1235 39.6202 28.1235 42.6016 28.1235C42.6016 32.4917 42.6016 36.8736 42.6016 41.2972C45.5414 41.2972 48.4119 41.2972 51.1575 41.2972C46.8172 45.6376 42.449 50.0057 38.1087 54.3461C33.8792 50.1167 29.5111 45.7485 25.1152 41.3527C27.958 41.3527 30.8285 41.3527 33.7821 41.3527Z"
        fill="#5E35B1"
      />
      <path
        d="M54.4996 25.2534C53.8063 13.8546 46.1378 9.75 38.927 9.75C33.7545 9.75 28.9427 12.4402 26.0306 16.8638C25.6285 16.8222 25.2124 16.7945 24.7964 16.7945C19.5131 16.7945 15.1588 20.594 13.3977 24.6987H13.051C6.61674 24.6987 1.375 30.0236 1.375 36.555C1.375 43.0864 6.63061 48.4252 13.0649 48.4252H29.7608L25.7117 44.1957H13.0649C9.02961 44.1957 5.61832 40.7012 5.61832 36.5689C5.61832 32.4365 9.02961 28.942 13.0649 28.942H14.9092C15.8799 28.942 16.7258 28.2902 16.9616 27.3473C17.7381 24.3104 20.9553 21.0239 24.7964 21.0239C25.2956 21.0239 25.7949 21.0794 26.2802 21.1903L26.3634 21.218C26.4466 21.2458 26.5159 21.2596 26.5992 21.2874C27.5421 21.5093 28.5128 21.0655 28.9704 20.2196C30.995 16.3784 34.8084 13.9933 38.927 13.9933C46.1656 13.9933 50.3118 18.722 50.3118 26.959C50.3118 28.0129 51.0883 28.9004 52.1284 29.0529C55.7477 29.5799 58.4795 32.8248 58.4795 36.5827C58.4795 40.7151 55.0682 44.1957 51.0329 44.1957H50.4366L46.5677 48.4252H51.0329C57.4672 48.4252 62.7089 43.1141 62.7089 36.5827C62.7089 31.3548 59.2838 26.7649 54.4996 25.2534Z"
        fill="#3F51B5"
      />
    </svg>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <a href="/">
          <Logo />
        </a>
        <Stack direction={"row"} spacing={6}>
          <Link href={"/"}>Home</Link>
          <Link href={"/terms"}>Terms and Conditions</Link>
          <Link href={"/privacy"}>Privacy Policy</Link>
          <Link href={"/contact"}>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>
            &copy; {new Date().getFullYear()} YTDL - All Rights Reserved | We
            are not affiliated with or endorsed by{" "}
            <u>
              <a href="https://yt-dl.org/">ytdl-org</a>
            </u>
            .
          </Text>
          {/*
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
          */}
        </Container>
      </Box>
    </Box>
  );
}

