import React from "react";
import {
  Box,
  Card,
  Checkbox,
  Collapse,
  HStack,
  Icon,
  IconButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function CollapsableCheckbox({ text, description }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Card px={4} py={2} shadow="md" width="100%">
      <HStack justifyContent="space-between">
        <Checkbox size="lg" value={text}>
          <Text fontSize="md">{text}</Text>
        </Checkbox>

        <IconButton
          aria-label="Toggle more info"
          size="sm"
          variant="ghost"
          onClick={onToggle}
          icon={
            isOpen ? (
              <Icon color="purple.500" as={FaArrowUp} />
            ) : (
              <Icon color="purple.200" as={FaArrowDown} />
            )
          }
        />
      </HStack>

      <Collapse in={isOpen}>
        <Box px={4} py={2} my={2} color="white" bg="purple.500" rounded="md">
          <Text fontSize="sm">{description}</Text>
        </Box>
      </Collapse>
    </Card>
  );
}
