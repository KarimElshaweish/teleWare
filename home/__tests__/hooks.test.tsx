import { renderHook } from "@testing-library/react-hooks";
import configureStore from "redux-mock-store"; // ES6 modules
import { Provider } from "react-redux";
import { useCurreny, useSeCurrancy } from "../../currancy/hooks";
import useSetLocationPostion from "../location/useSetLocationPostion";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("hooks", () => {
  it("update store for Location", async () => {
    const initialState = {};
    const store = mockStore(initialState);  
    const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>
  
    const { result } = renderHook(() => useSetLocationPostion(), { wrapper });
    result.current(1,2);
    expect(store.getActions()[0]).toStrictEqual(
      {
        type:"Location/SET",
        latitude:2,
        longtude:1
  });
});
});