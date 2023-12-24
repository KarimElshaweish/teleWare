import { Currancy } from "../../types";

const initialState: Currancy = {
  value: {},
};
export enum Actions {
  SET_CURRANCY = "SET/CURRANCY",
}
interface SetCurrancyAction {
  type: Actions.SET_CURRANCY;
  value: Currancy;
}

type CurranyAction = SetCurrancyAction;

export default (state = initialState, action: CurranyAction) => {
  switch (action.type) {
    case Actions.SET_CURRANCY:
      return {
        ...state,
        action: Actions.SET_CURRANCY,
        value: action.value,
      };
    default:
      return state;
  }
};
