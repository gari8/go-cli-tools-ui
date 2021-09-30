import { render } from "@testing-library/react";
import PageLink from "@/components/atoms/PageLink";
import { IPageObject } from "@/types/ui";

describe("PageLink", (): void => {
  const testPage: IPageObject = {
    name: "test",
    url: "/",
  };
  test("is components", () => {
    const { asFragment } = render(<PageLink page={testPage} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
