import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "./hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGame();

  return (
    <>
      {error && <Text>{error}</Text>}
      {/* <ul>
        {games.map((game) => (
          <li>{game.name}</li>
        ))}
      </ul> */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap="10px">
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
