import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "./hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { games, error, loading } = useGame();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        columnGap={"10px"}
        rowGap={"20px"}
      >
        {loading
          ? skeleton.map((s, index) => (
              <GameCardContainer>
                <GameCardSkeleton key={index} />
              </GameCardContainer>
            ))
          : games.map((g) => (
              <GameCardContainer>
                <GameCard key={g.id} game={g} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
