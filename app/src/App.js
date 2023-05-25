import {
  Container,
  Button,
  Select,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Heading,
} from "@chakra-ui/react";
import { CalendarIcon, CheckIcon } from "@chakra-ui/icons";

function App() {
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
    <Container my={8}>
      <Heading>Travel Planner</Heading>

      <Stack mt={8}>
        <Select placeholder="Select Country">
          <option value="SP">Spain</option>
          <option value="IT">Italy</option>
          <option value="BR">Brazil</option>
        </Select>

        <Select placeholder="Select City">
          <option value="B">Barcelona</option>
          <option value="M">Milan</option>
          <option value="R">Rio</option>
        </Select>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children="$"
          />
          <Input type="number" placeholder="Enter budget" />
          <InputRightElement>
            <CheckIcon color="green.500" />
          </InputRightElement>
        </InputGroup>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            <CalendarIcon color="gray.300" />
          </InputLeftElement>
          <Input type="number" placeholder="Enter days" />
          <InputRightElement>
            <CheckIcon color="green.500" />
          </InputRightElement>
        </InputGroup>

        <Button onClick={handleGenerateTravelPlan}>Generate travel plan</Button>
      </Stack>
    </Container>
  );
}

export default App;
