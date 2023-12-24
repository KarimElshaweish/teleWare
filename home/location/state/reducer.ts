const initialState = {
  postion: {
    longtude: null,
    latitude: null,
  },
};
export enum Actions {
  ENABLE_LOCATION_PERMISSION = "PERMISSION/ENABLE_LOCATION",
  SET_LOCATION = "Location/SET",
}
interface EnableLocationPermissionAction {
  type: Actions.ENABLE_LOCATION_PERMISSION;
  isEnabled: boolean;
}

interface SetLocationAction {
  type: Actions.SET_LOCATION;
  longtude: number;
  latitude: number;
}

type LocationActions = EnableLocationPermissionAction | SetLocationAction;

export default (state = initialState, action: LocationActions) => {
  switch (action.type) {
    case Actions.SET_LOCATION:
      return {
        ...state,
        action: Actions.SET_LOCATION,
        postion: {
          longtude: action.longtude,
          latitude: action.latitude,
        },
      };
    default:
      return state;
  }
};
