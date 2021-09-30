import { render } from "@testing-library/react";
import Show from "../../../pages/tools/[id]";

describe("show", () => {
  test("is components", () => {
    const { asFragment } = render(<Show />);
    expect(asFragment()).toMatchSnapshot();
  });
});
