import { render } from "@testing-library/react";
import Header from "../../../src/components/organisms/Header";

describe("Header", (): void => {
  test("is components", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
