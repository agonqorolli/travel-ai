import React, { useEffect, useState } from "react";
import { Image, Progress } from "@chakra-ui/react";

const UNSPLASH_TRAVELLING_IMAGES = [
  "https://images.unsplash.com/photo-1527631746610-bca00a040d60",
  "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
  "https://images.unsplash.com/photo-1503220317375-aaad61436b1b",
  "https://images.unsplash.com/photo-1528543606781-2f6e6857f318",
  "https://images.unsplash.com/photo-1647891940243-77a6483a152e",
  "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd",
  "https://images.unsplash.com/photo-1551918120-9739cb430c6d",
];

export default function Billboard() {
  const [imageIndex, setImageIndex] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let _counter = 0;
    let _imageIndex = 0;
    const i = setInterval(() => {
      _counter++;

      if (_counter === 2500) {
        let randomIndex;
        do {
          randomIndex = Math.floor(
            Math.random() * UNSPLASH_TRAVELLING_IMAGES.length
          );
        } while (randomIndex === _imageIndex);

        _imageIndex = randomIndex;
        _counter = 0;
      }

      setImageIndex(_imageIndex);
      setCounter(_counter);
    }, 1);

    return () => {
      clearTimeout(i);
    };
  }, []);

  return (
    <>
      <Progress
        position="absolute"
        top={0}
        left={0}
        right={0}
        zIndex={9}
        size="xs"
        colorScheme="red"
        backgroundColor="transparent"
        value={counter}
        max={2500}
      />
      {UNSPLASH_TRAVELLING_IMAGES.map((img, i) => {
        return (
          <Image
            key={img}
            position="absolute"
            w="100%"
            h="100%"
            objectFit="cover"
            src={img}
            alt="Travelling billboard"
            opacity={imageIndex === i ? 1 : 0}
            transition="opacity 0.5s ease-in-out"
            loading="lazy"
          />
        );
      })}
    </>
  );
}
