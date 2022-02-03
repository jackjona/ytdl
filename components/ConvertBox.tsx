import { ChevronDownIcon, DownloadIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Image,
  useColorModeValue,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { thumbnailhost, formats } from "./utils/helpers";

interface Props {
  data: any;
  chooseFormat: (format: string, videoId: string) => void;
}
export default function ConvertBox(props: Props) {
  const { data, chooseFormat } = props;

  return (
    <Box
      transition="all .2s ease-in-out"
      rounded="lg"
      bgColor={useColorModeValue("gray.100", "gray.600")}
      m="5"
      _hover={{
        background: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      <Box>
        <div className="items-center flex flex-col lg:flex-row content-center">
          <Image
            src={`${thumbnailhost}${data.videoId}/mqdefault.jpg`}
            alt={`Thumbnail of ${data.title}`}
          />
          <Box p="0.5">
            <Heading size="md">{data.title}</Heading>
            <Text mb="5">{data?.author?.name || data?.author?.user}</Text>
            <Menu>
              <MenuButton
                mb="4"
                bgColor="purple.500"
                color={useColorModeValue("gray.100", "gray.100")}
                as={Button}
                leftIcon={<DownloadIcon />}
                rightIcon={<ChevronDownIcon />}
              >
                Download
              </MenuButton>
              <MenuList>
                {formats.map((format) => (
                  <MenuItem
                    key={format.text}
                    onClick={() => chooseFormat(format.format, data.videoId)}
                  >
                    {format.text}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </div>
      </Box>
    </Box>
  );
}

