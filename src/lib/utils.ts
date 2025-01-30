import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { BHATTACHARYA,  ADHIP } from "./const";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomWord(words: { word: string; language: string }[]): {
  word: string;
  language: string;
} {
  return words[Math.floor(Math.random() * words.length)];
}

export function getUniqueLanguageCombination() {
  let randomAdhip = getRandomWord(ADHIP);
  let randomBhattacharya = getRandomWord(BHATTACHARYA);

  while (
    randomAdhip.language !== randomBhattacharya.language ||
    randomBhattacharya.language !== randomAdhip.language
  ) {
    randomAdhip = getRandomWord(ADHIP);
    randomBhattacharya = getRandomWord(BHATTACHARYA);
  }

  return { randomAdhip, randomBhattacharya };
}
