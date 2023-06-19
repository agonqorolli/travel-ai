import React from "react";
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
import { useApp } from "../utils/useApp";

export default function Home() {
  const {
    setStep,
    cityInput,
    setCityInput,
    budgetInput,
    setBudgetInput,
    daysInput,
    setDaysInput,
  } = useApp();

  const { formattedCities } = flattenCities(allCountries);

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
          onChange={(event) => setCityInput(event.target.value)}
          onSelect={setCityInput}
          options={formattedCities}
        />

        <NumberInput
          shadow="md"
          rounded="md"
          focusBorderColor="purple.500"
          value={budgetInput}
          onChange={setBudgetInput}
        >
          <InputGroup>
            <NumberInputField
              borderColor="transparent"
              _hover={{ borderColor: "none" }}
              placeholder="Enter budget (€)"
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
          value={daysInput}
          onChange={setDaysInput}
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
          setStep(2);
        }}
        isDisabled={!cityInput || !budgetInput || !daysInput}
        rightIcon={<Icon as={FaArrowRight} />}
      >
        Go to second step
      </Button>
    </Stack>
  );
}
