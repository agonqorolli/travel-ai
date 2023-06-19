import React from "react";
import { Box, Container, Flex, Progress } from "@chakra-ui/react";
import Billboard from "./components/Billboard";
import Home from "./components/Home";
import Activities from "./components/Activities";
import TravelPlan from "./components/TravelPlan";
import { useApp } from "./utils/useApp";

function App() {
  const { step } = useApp();

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
          value={1 + step * 33}
        />
        <Container my={20}>
          {step === 1 ? <Home /> : step === 2 ? <Activities /> : <TravelPlan />}
        </Container>
      </Box>
    </Flex>
  );
}

export default App;