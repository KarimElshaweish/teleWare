import { NativeModules } from "react-native";
const { LocationModule } = NativeModules;
interface Location {
  getCurrentLocation(
    callBack: (longitude: number, latitude: number) => void,
  ): void;
}
export default LocationModule as Location;
