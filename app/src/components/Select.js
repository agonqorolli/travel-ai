import React, { useState } from "react";
import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
} from "@chakra-ui/react";
import { FaSearchLocation } from "react-icons/fa";

export default function Select({
  placeholder,
  value,
  onChange,
  onSelect,
  options,
}) {
  const [results, setResults] = useState([]);

  function handleOnChange(event) {
    const newValue = event.target.value;

    if (newValue.length >= 3) {
      const newResults = options.filter((option) => {
        return option.toLowerCase().startsWith(value.toLowerCase());
      });
      setResults(newResults);
    } else {
      setResults([]);
    }

    onChange(event);
  }

  function handleOnSelect(newValue) {
    setResults([]);
    onSelect(newValue);
  }

  return (
    <Box position="relative">
      <InputGroup shadow="md" rounded="md">
        <Input
          value={value}
          onChange={handleOnChange}
          focusBorderColor="purple.500"
          borderColor="transparent"
          _hover={{ borderColor: "none" }}
          placeholder={placeholder}
        />
        <InputRightElement>
          <Icon color="purple.200" as={FaSearchLocation} />
        </InputRightElement>
      </InputGroup>

      {!!results.length && (
        <Box zIndex={100} width="100%" maxHeight="10px" position="absolute">
          <Stack
            spacing={0}
            mt={1}
            p={2}
            borderWidth="1px"
            borderRadius="md"
            overflowY="auto"
            bg="white"
          >
            {results.slice(0, 5).map((result) => {
              return (
                <Button
                  key={result}
                  variant="ghost"
                  colorScheme="purple"
                  justifyContent="start"
                  size="sm"
                  fontWeight="normal"
                  onClick={() => {
                    handleOnSelect(result);
                  }}
                >
                  {result}
                </Button>
              );
            })}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
