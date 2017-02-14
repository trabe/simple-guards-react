# Simple Guards React

## Description

React higher order component to add [simple guards](https://www.npmjs.com/package/simple-guards) to your
components.

## Install

```
npm instal simple-guards-react
```

## Usage

```
import React from "react";
import { withGuards } from "simple-guards-react";

const MyComponent = ({ name }) => (
  <div>
    Hello, <span>{name}</span>!
  </div>
);

const enhance = withGuards(({ name }, guard) => {
  guard(name === undefined, "name should be defined");
});

export default enhance(MyComponent);
```
