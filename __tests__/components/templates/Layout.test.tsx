import { render } from "@testing-library/react";
import Layout from "@/components/templates/Layout";

describe("Layout", () => {
  test("is components", () => {
    const { asFragment } = render(<Layout>child</Layout>);
    expect(asFragment()).toMatchSnapshot();
  });
});
