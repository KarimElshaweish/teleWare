import { useDispatch } from "react-redux";
import { Actions } from "./state/reducer";

const useSetLocationPostion = () => {
    const dispatch = useDispatch();
    return (longtude: number, latitude: number) => {
      dispatch({
        type: Actions.SET_LOCATION,
        longtude,
        latitude,
      });
    };
  };

  export default useSetLocationPostion;