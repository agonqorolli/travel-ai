import React, { useState } from "react";
import { Box, Container, Flex, Progress } from "@chakra-ui/react";
import Billboard from "./components/Billboard";
import Home from "./components/Home";
import Activities from "./components/Activities";
import TravelPlan from "./components/TravelPlan";

function App() {
  const [screen, setScreen] = useState(1);

  async function postJSON(data) {
    try {
      const response = await fetch(
        "https://d6sa2alo0j.execute-api.us-east-1.amazonaws.com/default/testRequest",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-type": "application/json",
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "POST",
          },
          body: JSON.stringify(data),
        }
      );

      // const result = await response.json();
      console.log("Success:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function handleGenerateTravelPlan() {
    postJSON({
      prompt: "Tell me a joke about dogs",
    })
      .then((res) => {
        console.log("res", res);
      })
      .catch((er) => {
        console.log("er", er);
      });
  }

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
