import React from "react";
import expect from "expect";
import { render } from "enzyme";
import getDisplayName from "../src/get-display-name";
import { withGuards } from "../src/with-guards";

describe("withGuards", () => {
  const Component = () => <div />;

  it("exports", () => {
    expect(withGuards).toBeA(Function);
  });

  describe("#withGuards", () => {
    it("Executes the guards", () => {
      expect(() => {
        const EnhancedComponent = withGuards((props, guard) => {
          guard(false, "error");
        })(Component);
        render(<EnhancedComponent />);
      }).toThrow("Broken guard: error");
    });

    it("Maintains the wrapped component display name", () => {
      expect(() => {
        const EnhancedComponent = withGuards((props, guard) => {
          guard(true, "error");
        })(Component);
        expect(getDisplayName(Component)).toEqual(getDisplayName(EnhancedComponent));
      });
    });

    it("Renders the original component", () => {
      expect(() => {
        const EnhancedComponent = withGuards((props, guard) => {
          guard(true, "error");
        })(Component);
        const comp = render(<EhancedComponent />);
        expect(comp.contains(<div />)).toEqual(true);
      });
    });
  });
});
