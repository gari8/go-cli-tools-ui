import { render } from "@testing-library/react";
import PageLinkList from "@/components/molecules/PageLinkList";

describe("PageLinkList", () => {
  test("is components", () => {
    const { asFragment } = render(<PageLinkList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
