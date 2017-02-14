import React, { Component } from "react";
import { guards } from "simple-guards";
import getDisplayName from "./get-display-name";

export const withGuards = (fn, WrappedComponent) => props => {
  class WithGuards extends Component {
    render() {
      guards(guard => fn(props, guard));

      return <WrappedComponent {...props} />;
    }
  }
  WithGuards.displayName = getDisplayName(WrappedComponent);
  return WithGuards;
};
