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
    <Flex
      flexDirection={{ base: "column", sm: "row" }}
      justifyContent="space-between"
    >
      <Box
        id="billboard-box"
        height={{ base: "20vh", sm: "100vh" }}
        minWidth="40vw"
      >
        <Billboard />
      </Box>

      <Box position="relative">
        <Progress
          position="absolute"
          top={0}
          left={0}
          right={0}
          zIndex={9}
          size="xs"
          colorScheme="purple"
          backgroundColor="purple.100"
          value={1 + step * 33}
        />

        <Box
          height={{ base: "80vh", sm: "100vh" }}
          minWidth="60vw"
          overflowY="auto"
        >
          <Container my={{ base: 10, sm: 20 }} px={6}>
            {step === 1 ? (
              <Home />
            ) : step === 2 ? (
              <Activities />
            ) : (
              <TravelPlan />
            )}
          </Container>
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
