import { useDispatch, useSelector } from "react-redux";
import { Actions } from "./state/reducer";
import { useCallback } from "react";
import { GlobalState } from "../../types";
import { Platform } from "react-native";
import { PermissionsAndroid } from "react-native";
import LocationModule from "../../nativeModules/locations";

export const useRequestLocationPermissionForAndroid = async () => {
  const updateLocation = useUpdateLocation();
  return async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "TeleWare App Location Permission",
          message: "TeleWare App want to access your location Permission.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        updateLocation();
      }
    } catch (error) {
      console.log(`error => ${error}`);
    }
  };
};

export const useCheckLocationPermissionForAndroid = () => {
  const requestPermssion = useRequestLocationPermissionForAndroid();
  const updateLocation = useUpdateLocation();
  return async () => {
    try {
      await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      ).then(async (value) => {
        if (!value) {
          (await requestPermssion)();
        } else {
          updateLocation();
        }
      });
    } catch (error) {
      console.log(`error => ${error}`);
    }
  };
};

const useUpdateLocation = () => {
  const setLocationPostion = useSetLocationPostion();
  return () => {
    LocationModule.getCurrentLocation((longitude: number, latitude: number) =>
      setLocationPostion(longitude, latitude),
    );
  };
};

export const useEnabkeLocationState = () => {
  const dispatch = useDispatch();
  return useCallback(() => {
    dispatch({
      type: Actions.ENABLE_LOCATION_PERMISSION,
    });
  }, []);
};
export const useSetLocationPostion = () => {
  const dispatch = useDispatch();
  return (longtude: number, latitude: number) => {
    dispatch({
      type: Actions.SET_LOCATION,
      longtude,
      latitude,
    });
  };
};
export const useGetLocation = () => {
  const setLocation = useSetLocationPostion();
  const androidPermission = useCheckLocationPermissionForAndroid();
  return () => {
    // androidPermission();
    if (Platform.OS === "android") {
      androidPermission();
    } else {
      LocationModule.getCurrentLocation((longitude: number, latitude: number) =>
        setLocation(longitude, latitude),
      );
    }
  };
};
const useLocationState = () =>
  useSelector((state: GlobalState) => state.location);
export const useIsLocationEnabled = () => useLocationState().isEnabled;
export const useLocatiobPostion = () => useLocationState().postion;
