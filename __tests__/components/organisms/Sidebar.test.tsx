import { render } from "@testing-library/react";
import Sidebar from "@/components/organisms/Sidebar";

describe("Sidebar", () => {
  test("is components", () => {
    const { asFragment } = render(<Sidebar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
