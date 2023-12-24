import React, { useEffect } from "react";
import ExchangeCurrancy from "../exchangeCurrancy/ExchangeCurrancy";
import NetworkModule from "../nativeModules/network";
import { useSeCurrancy } from "../currancy/hooks";
import { Currancy } from "../types";
const ExchangeCurrancyScreen = () => {
  const setCurrancy = useSeCurrancy();
  useEffect(() => {
    NetworkModule.getCurrencyApi((conversionRates: string) =>
      setCurrancy(JSON.parse(conversionRates) as Currancy),
    );
  }, []);
  return <ExchangeCurrancy />;
};

export default ExchangeCurrancyScreen;
