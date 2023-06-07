import React, { useState } from "react";
import { Box, Container, Flex, Progress } from "@chakra-ui/react";
import Billboard from "./components/Billboard";
import Home from "./components/Home";
import Activities from "./components/Activities";
import TravelPlan from "./components/TravelPlan";

function App() {
  const [screen, setScreen] = useState(1);

  return (
    <Flex flexDirection="row" justifyContent="space-between">
      <Box id="billboard-box" height="100vh" minWidth="40vw">
        <Billboard />
      </Box>

      <Box position="relative" height="100vh" minWidth="60vw" overflowY="auto">
        <Progress
          position="fixed"
          top={0}
          left="40vw"
          right={0}
          zIndex={9}
          size="xs"
          colorScheme="purple"
          backgroundColor="purple.100"
          value={1 + screen * 33}
        />
        <Container my={20}>
          {screen === 1 ? (
            <Home goTo={setScreen} />
          ) : screen === 2 ? (
            <Activities goTo={setScreen} />
          ) : (
            <TravelPlan />
          )}
        </Container>
      </Box>
    </Flex>
  );
}

export default App;
