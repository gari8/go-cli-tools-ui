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
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
      "^@/components/(.*)$": "<rootDir>/components/$1",
      "^@/pages/(.*)$": "<rootDir>/pages/$1",
      "^@/types/(.*)$": "<rootDir>/types/$1",
      "^@/stores/(.*)$": "<rootDir>/stores/$1",
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
    setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
  };
};
