import { render } from "@testing-library/react";
import Index from "../../pages/index";

describe("index", (): void => {
  test("is components", () => {
    const { asFragment } = render(<Index />);
    expect(asFragment()).toMatchSnapshot();
  });
});
