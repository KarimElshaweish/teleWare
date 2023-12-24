export enum ResourcesNamesList {
  HOME = "home",
  EXCHANGE_RATE = "exchange_rate",
}
export interface RootStackParamList {
  [ResourcesNamesList.EXCHANGE_RATE]: undefined;
}
interface Location {
  isEnabled: boolean;
  postion: {
    longtude?: number;
    latitude?: number;
  };
}
export type Currancy = { value: { [key: string]: number } };

export interface GlobalState {
  location: Location;
  currany: Currancy;
}
