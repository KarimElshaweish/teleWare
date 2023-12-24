import { useDispatch, useSelector } from "react-redux";
import { Actions } from "./state/reducer";
import { Currancy, GlobalState } from "../types";

export const useSeCurrancy = () => {
  const dispatch = useDispatch();
  return (value: Currancy) => {
    dispatch({
      type: Actions.SET_CURRANCY,
      value: value,
    });
  };
};

export const useCurreny = () =>
  useSelector((state: GlobalState) => state.currany.value);
