/**
 * @format
 */

import React from "react";
import type { Node } from "react";
import { Text } from "react-native";
import { stringified } from "@repro-rnx-metro-symlink-exports/utils";

const App: () => Node = () => {
  return <Text>{stringified}</Text>;
};

export default App;
