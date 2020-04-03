import App from ".";
import { shallow } from "enzyme";

describe("App", () => {
  it("should render", () => {
    const component = shallow(<App />);
    expect(component).toExist();
  });
});
