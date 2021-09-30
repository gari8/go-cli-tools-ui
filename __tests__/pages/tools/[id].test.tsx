import { render } from "@testing-library/react";
import Show from "@/pages/tools/[id]";
import { RecoilRoot } from "recoil";

describe("Show", () => {
  test("is components", () => {
    const { asFragment } = render(
      <RecoilRoot>
        <Show />
      </RecoilRoot>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
