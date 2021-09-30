import Index from "@/pages/index";
import { RecoilRoot } from "recoil";
import { render } from "@testing-library/react";

describe("Index", (): void => {
  test("is components", () => {
    const { asFragment } = render(
      <RecoilRoot>
        <Index />
      </RecoilRoot>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
