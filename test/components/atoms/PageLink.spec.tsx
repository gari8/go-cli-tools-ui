import { render } from "@testing-library/react";
import PageLink from "../../../src/components/atoms/PageLink";
import { IPageObject } from "../../../src/types/ui";

describe("PageLink", (): void => {
  const testPage: IPageObject = {
    name: "test",
    url: "/",
  };
  const useRouter = jest.spyOn(require("next/router"), "useRouter");
  test("is components", () => {
    useRouter.mockImplementationOnce(() => ({
      query: { pathname: "/" },
    }));
    const { asFragment } = render(<PageLink page={testPage} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
