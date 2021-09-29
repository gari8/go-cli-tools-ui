import Top from "../../../src/pages/index";
import { render } from "@testing-library/react";

describe("index", (): void => {
  test("Top", () => {
    const { asFragment } = render(<Top />);
    expect(asFragment()).toMatchSnapshot();
  });
});
