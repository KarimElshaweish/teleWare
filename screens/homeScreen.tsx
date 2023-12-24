import React from "react";
import { ResourcesNamesList } from "../types";
import { useAppNavigation } from "../navigation";
import { Button } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";
import { Location } from "../home";

const HomeScreen = () => {
  const nav = useAppNavigation();
  return (
    <SafeAreaView>
      <Location />
      <Button onPress={() => nav.navigate(ResourcesNamesList.EXCHANGE_RATE)}>
        Exchange Rate
      </Button>
    </SafeAreaView>
  );
};

export default HomeScreen;
