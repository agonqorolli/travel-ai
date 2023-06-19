import React, { useState } from "react";
import {
  Button,
  CheckboxGroup,
  Heading,
  Icon,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import CollapsableCheckbox from "./CollapsableCheckbox";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useApp } from "../utils/useApp";

export default function Activities() {
  const {
    setStep,
    cityInput,
    budgetInput,
    daysInput,
    activitiesInput,
    setActivitiesInput,
    setTravelPlan,
  } = useApp();

  const [isGenerating, setIsGenerating] = useState(false);

  async function handleGenerateTravelPlan() {
    setIsGenerating(true);
    try {
      const prompt = `Generate a ${daysInput}-day travel plan in ${cityInput} with a budget of ${budgetInput} euro`;
      const promptSuffix = activitiesInput
        ? `and considering my hobbies ${activitiesInput
            .join(", ")
            .toLowerCase()}`
        : "";
      const response = await fetch(
        "https://6ypadb4sz6.execute-api.eu-central-1.amazonaws.com/default/queryOpenAI",
        {
          method: "POST",
          body: JSON.stringify({
            prompt: `${prompt} ${promptSuffix}`,
          }),
        }
      );

      const result = await response.json();

      console.log("Prompt:", `${prompt} ${promptSuffix}`);
      console.log("Result:", result);

      setTravelPlan(result.choices[0].text);
      setStep(3);
    } catch (error) {
      console.error("Error:", error);
    }
    setIsGenerating(false);
  }

  return (
    <Stack spacing={10}>
      <Heading textAlign="center">Optional Activities</Heading>

      <Stack spacing={4}>
        <CheckboxGroup
          colorScheme="purple"
          value={activitiesInput}
          onChange={setActivitiesInput}
        >
          <HStack justifyContent="space-between" alignItems="start" spacing={6}>
            <VStack flex={1} spacing={4}>
              <CollapsableCheckbox
                text="Sightseeing"
                description="Explore famous landmarks, architectural wonders, and natural wonders in your destination. Visit historical sites, museums, parks, and other attractions."
              />
              <CollapsableCheckbox
                text="Local Cuisine"
                description="Indulge in the local flavors and culinary traditions by trying out regional dishes and street food. Explore food markets, visit local restaurants, and participate in cooking classes or food tours."
              />
              <CollapsableCheckbox
                text="Outdoor Adventures"
                description="Engage in thrilling activities such as hiking, biking, kayaking, snorkeling, or zip-lining, depending on the location. Enjoy nature and explore the surrounding landscapes."
              />
              <CollapsableCheckbox
                text="Cultural Immersion"
                description="Immerse yourself in the local culture by attending festivals, concerts, or theater performances. Visit local communities, interact with the residents, and learn about their customs and traditions."
              />
              <CollapsableCheckbox
                text="Shopping"
                description="Discover unique souvenirs, local crafts, and traditional products by exploring markets, boutiques, and artisan shops. Support local businesses and bring back special mementos from your trip."
              />
            </VStack>
            <VStack flex={1} spacing={4}>
              <CollapsableCheckbox
                text="Relaxation & Wellness"
                description="Take some time to unwind and rejuvenate by visiting spas, wellness centers, or hot springs. Practice yoga or meditation in serene settings, or simply relax on the beach."
              />
              <CollapsableCheckbox
                text="Historical Exploration"
                description="Dive into the rich history of your destination by visiting historical sites, castles, ancient ruins, or museums. Learn about the past and gain a deeper understanding of the local heritage."
              />
              <CollapsableCheckbox
                text="Wildlife Encounters"
                description="Go on wildlife safaris, whale watching tours, or birdwatching expeditions to observe and appreciate the local fauna. Visit nature reserves or national parks known for their biodiversity."
              />
              <CollapsableCheckbox
                text="Adventure Sports"
                description="If you're an adrenaline junkie, try activities like skydiving, bungee jumping, rock climbing, or paragliding. Seek out adventure sports available in your destination and experience an adrenaline rush."
              />
              <CollapsableCheckbox
                text="Local Experiences"
                description="Engage in activities that allow you to immerse yourself in the daily life of locals, such as taking a cooking class, participating in a traditional dance workshop, or joining a community service project. Connect with the people and their way of life."
              />
            </VStack>
          </HStack>
        </CheckboxGroup>
      </Stack>

      <VStack spacing={4}>
        <Button
          w="100%"
          p={10}
          size="lg"
          colorScheme="purple"
          shadow="md"
          isLoading={isGenerating}
          isDisabled={isGenerating}
          onClick={handleGenerateTravelPlan}
          rightIcon={<Icon as={FaArrowRight} />}
        >
          Generate travel plan
        </Button>

        <Button
          w="100%"
          size="md"
          colorScheme="purple"
          variant="ghost"
          shadow="md"
          isDisabled={isGenerating}
          leftIcon={<Icon as={FaArrowLeft} />}
          onClick={() => setStep(1)}
        >
          Go to first step
        </Button>
      </VStack>
    </Stack>
  );
}
