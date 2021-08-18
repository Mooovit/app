import React from "react";
import renderer from "react-test-renderer";

const FakeComponent = () => <>Hello world</>

it("rend correctly", () => {
  const tree = renderer.create(<FakeComponent />).toJSON();

  expect(tree).toMatchSnapshot();
});
