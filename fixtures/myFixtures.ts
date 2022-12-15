// Create fixtures
// Need to create an alias off test
import { test as myTest } from "@playwright/test";

type sam = {
  age: number;
  email: string;
};

const myFixtureTest = myTest.extend<sam>({
  age: 30,
  email: "same@redskytech.io",
});

export const test = myFixtureTest;
