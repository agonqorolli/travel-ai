import React, { useState } from "react";
import {
  Button,
  Heading,
  Icon,
  InputGroup,
  InputRightElement,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
} from "@chakra-ui/react";
import Select from "./Select";
import { FaArrowRight, FaCalendar, FaMoneyBillWave } from "react-icons/fa";
import allCountries from "../utils/countries.min.json";
import { flattenCities } from "../utils/flattenCities";

export default function Home({ goTo }) {
  const [cityInput, setCityInput] = useState("");
  const [cityResults, setCityResults] = useState([]);

  const { formattedCities } = flattenCities(allCountries);

  function handleCityInputChange(event) {
    const newCityInput = event.target.value;
    setCityInput(newCityInput);

    if (newCityInput.length >= 3) {
      const results = formattedCities.filter((city) => {
        return city.toLowerCase().startsWith(newCityInput.toLowerCase());
      });
      setCityResults(results);
    } else {
      setCityResults([]);
    }
  }

  function handleCitySelect(city) {
    setCityInput(city);
    setCityResults([]);
  }

  return (
    <Stack spacing={10}>
      <Heading textAlign="center">TravelGPT</Heading>

      <Text>
        Travel planning ignites unforgettable adventures, unlocking hidden gems
        and optimizing every moment. From snagging the best deals to crafting
        immersive itineraries, it's the compass that guides us through thrilling
        discoveries. Lets embrace the power of planning and let your wanderlust
        soar.
      </Text>

      <Stack spacing={4}>
        <Select
          placeholder="Find destination"
          value={cityInput}
          onChange={handleCityInputChange}
          results={cityResults}
          onSelect={handleCitySelect}
        />

        <NumberInput shadow="md" rounded="md" focusBorderColor="purple.500">
          <InputGroup>
            <NumberInputField
              borderColor="transparent"
              _hover={{ borderColor: "none" }}
              placeholder="Enter budget ($)"
            />
            <InputRightElement>
              <Icon color="purple.200" as={FaMoneyBillWave} />
            </InputRightElement>
          </InputGroup>
        </NumberInput>

        <NumberInput
          shadow="md"
          rounded="md"
          focusBorderColor="purple.500"
          min={1}
          max={10}
        >
          <InputGroup>
            <NumberInputField
              borderColor="transparent"
              _hover={{ borderColor: "none" }}
              placeholder="Enter days (max 10)"
            />
            <InputRightElement>
              <Icon color="purple.200" as={FaCalendar} />
            </InputRightElement>
          </InputGroup>
        </NumberInput>
      </Stack>

      <Button
        colorScheme="purple"
        shadow="md"
        onClick={() => {
          goTo(2);
        }}
        rightIcon={<Icon as={FaArrowRight} />}
      >
        Go to second step
      </Button>
    </Stack>
  );
}
