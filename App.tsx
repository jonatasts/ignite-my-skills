import React, { useEffect } from "react";
import { StatusBar } from "react-native";

import SplashScreen from "react-native-splash-screen";
import { Home } from "./src/screens/Home";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Home />
    </GestureHandlerRootView>
  );
}
