import React from "react";
import { StatusBar } from "react-native";

import { Home } from "./src/screens/Home";

const App = () => (
  <>
    <Home />
    <StatusBar barStyle={"light-content"} />
  </>
);

export default App;
