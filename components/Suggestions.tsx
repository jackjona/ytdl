import { Box, SimpleGrid, Heading } from '@chakra-ui/react';
import Suggestion from './Suggestion';
import SuggestionsSkeleton from './SuggestionsSkeleton';

interface Props {
  data: any[];
  isLoading: boolean;
  chooseFormat: (format: string, videoId: string) => void;
}
export default function Suggestions(props: Props) {
  const { data, isLoading, chooseFormat } = props;

  return (
    <Box>
      {!!data.length && (
        <Box mt="10">
          <Heading textAlign="center">Suggestions</Heading>
        </Box>
      )}
      {isLoading && <SuggestionsSkeleton />}
      {!isLoading && (
        <SimpleGrid
          templateColumns="repeat(auto-fit, minmax(max(290px, 40%), 1fr))"
          spacing={10}
          my="5"
        >
          {data.map((suggestion) => {
            return (
              <Suggestion
                data={suggestion}
                key={suggestion.id.videoId}
                chooseFormat={chooseFormat}
              />
            );
          })}
        </SimpleGrid>
      )}
    </Box>
  );
}
