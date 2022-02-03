import React from 'react';
import { Input, Box, Flex, Button, ButtonGroup } from '@chakra-ui/react';

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearch: () => void;
  error: boolean;
  input: string;
  isLoading: boolean;
}
const Search = (props: Props) => {
  const { handleChange, handleSearch, error, input, isLoading } = props;

  const handleKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13 || event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <Box mt="2" mb="2">
      <Flex gridGap="2">
        <Input
          isInvalid={error}
          placeholder="Search Keywords Or Paste YouTube Link Here..."
          onChange={handleChange}
          value={input}
          onKeyDown={handleKeydown}
        />
        <Button
          px='8'
          colorScheme='green' 
          variant='solid'
          onClick={handleSearch}
          isLoading={isLoading}
          loadingText="Converting..."
        >
          Convert &rarr;
        </Button>
      </Flex>
    </Box>
  );
};

export default React.memo(Search);
