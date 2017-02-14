import React, { Component } from "react";
import { guards } from "simple-guards";
import getDisplayName from "./get-display-name";

export const withGuards = fn => WrappedComponent => {
  class WithGuards extends Component {
    render() {
      guards(guard => fn(this.props, guard));

      return <WrappedComponent {...this.props} />;
    }
  }
  WithGuards.displayName = getDisplayName(WrappedComponent);
  return WithGuards;
};
