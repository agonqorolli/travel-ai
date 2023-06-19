import React, { useEffect } from "react";
import { Button, Code, Heading, Icon, Stack } from "@chakra-ui/react";
import { FaPrint } from "react-icons/fa";
import { fireRealisticConfetti } from "../utils/confetti";
import { useApp } from "../utils/useApp";

export default function TravelPlan() {
  const { travelPlan } = useApp();

  useEffect(() => {
    fireRealisticConfetti();
  }, []);

  return (
    <Stack spacing={10}>
      <Heading textAlign="center">Travel PLAN</Heading>

      <Stack spacing={4}>
        <Code p={4} whiteSpace="pre-wrap">
          {`${travelPlan}`}
        </Code>
      </Stack>

      <Button
        p={10}
        size="lg"
        colorScheme="purple"
        shadow="md"
        onClick={() => {
          window.print();
        }}
        rightIcon={<Icon as={FaPrint} />}
      >
        Print
      </Button>
    </Stack>
  );
}
