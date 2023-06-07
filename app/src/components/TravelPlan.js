import React, { useEffect } from "react";
import { Button, Code, Heading, Icon, Stack } from "@chakra-ui/react";
import { FaPrint } from "react-icons/fa";
import { fireRealisticConfetti } from "../utils/confetti";

export default function TravelPlan() {
  useEffect(() => {
    fireRealisticConfetti();
  }, []);

  return (
    <Stack spacing={10}>
      <Heading textAlign="center">Travel PLAN</Heading>

      <Stack spacing={4}>
        <Code p={4}>
          Here's a sample 4-day travel plan for Barcelona within a budget of
          2000 euros: Day 1: Morning: Start your day with a visit to the iconic
          Sagrada Familia. Pre-book tickets to save time. Afternoon: Explore the
          Gothic Quarter (Barri Gòtic) and discover its narrow streets, historic
          buildings, and charming plazas. Evening: Head to La Barceloneta beach
          for a relaxing evening by the sea. Enjoy the sunset and try some
          delicious seafood at a local restaurant. Day 2: Morning: Take a stroll
          along the famous Las Ramblas, visiting La Boqueria market for a taste
          of local delicacies. Afternoon: Visit Park Güell, Gaudí's masterpiece.
          Book timed entry tickets in advance. Evening: Experience the vibrant
          atmosphere of El Raval neighborhood. Explore its trendy shops, bars,
          and street art. Day 3: Morning: Visit the Montjuïc Hill and enjoy
          panoramic views of Barcelona from the Montjuïc Castle. Take a cable
          car or hike up. Afternoon: Discover the Picasso Museum and delve into
          the artist's works. Evening: Indulge in the lively nightlife of the
          Gràcia neighborhood. Enjoy tapas and drinks at local bars. Day 4:
          Morning: Take a day trip to Montserrat, a stunning mountain range with
          a monastery. Hike or take a funicular to explore. Afternoon: Visit the
          Park de la Ciutadella and relax by the lake or rent a boat. Don't miss
          the Cascada Fountain. Evening: Enjoy a flamenco show and immerse
          yourself in the passion and energy of this traditional Spanish dance.
          Remember to allocate a budget for meals, transportation, and
          souvenirs. Opt for affordable eateries and consider using public
          transportation or walking to save on costs. Prices may vary, so always
          check ticket prices and entry fees in advance. Have a wonderful trip
          to Barcelona within your budget!
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
