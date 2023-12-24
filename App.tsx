import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { Provider } from "react-redux";

import { store } from "./store";
import HomeScreen from "./screens/homeScreen";
import ExchangeCurrancy from "./exchangeCurrancy/ExchangeCurrancy";
import ExchangeCurrancyScreen from "./screens/exchangeCurrrancy";
import { ResourcesNamesList } from "./types";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.dark}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={ResourcesNamesList.HOME}
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name={ResourcesNamesList.EXCHANGE_RATE}
              component={ExchangeCurrancyScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </Provider>
  );
};

export default App;
