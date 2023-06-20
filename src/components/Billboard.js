import React, { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";

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

  useEffect(() => {
    const imageChangeTimeout = setTimeout(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(
          Math.random() * UNSPLASH_TRAVELLING_IMAGES.length
        );
      } while (randomIndex === imageIndex);

      setImageIndex(randomIndex);
    }, 3000);

    return () => {
      clearTimeout(imageChangeTimeout);
    };
  }, [imageIndex]);

  return (
    <>
      {UNSPLASH_TRAVELLING_IMAGES.map((img, i) => {
        return (
          <Image
            position="absolute"
            w="100%"
            h="100%"
            objectFit="cover"
            src={img}
            alt="Travelling billboard"
            opacity={imageIndex === i ? 1 : 0}
            transition="opacity 1s ease-in-out"
          />
        );
      })}
    </>
  );
}
