import type { Config } from "@jest/types";

export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    preset: "ts-jest",
    testEnvironment: "jsdom",
    globals: {
      "ts-jest": {
        tsconfig: "<rootDir>/tsconfig.json",
      },
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?|ts?)$",
    collectCoverageFrom: [
      "**/*.{js,jsx,ts,tsx}",
      "!**/*.d.ts",
      "!**/node_modules/**",
    ],
    moduleNameMapper: {
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
      "^@/components/(.*)$": "<rootDir>/components/$1",
    },
    testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
    },
    transformIgnorePatterns: [
      "/node_modules/",
      "^.+\\.module\\.(css|sass|scss)$",
      "^.+\\.setup\\.ts$",
    ],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  };
};
