import { NativeModules } from "react-native";
const { NetworkModule } = NativeModules;

interface Network {
  getCurrencyApi(callBack: (conversionRates: string) => void): void;
}
export default NetworkModule as Network;
