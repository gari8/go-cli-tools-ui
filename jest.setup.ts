// useRouter用
jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/",
    };
  },
}));
