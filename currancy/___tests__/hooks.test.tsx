import { renderHook } from "@testing-library/react-hooks";
import configureStore from "redux-mock-store"; // ES6 modules
import { useSeCurrancy } from "../hooks";
import WithProvider from "../../utils/withProvider";
import { Provider } from "react-redux";

const middlewares = [];
const mockStore = configureStore(middlewares);

describe("hooks", () => {
  it("update store for currancy", async () => {
    const initialState = {};
    const store = mockStore(initialState);  
    const wrapper = ({ children }) => <Provider store={store}>{children}</Provider>
  
    const { result } = renderHook(() => useSeCurrancy(), { wrapper });
    result.current({value:{"EGP":10}});
    expect(store.getActions()[0].type).toBe("SET/CURRANCY");
    expect(store.getActions()[0]).toStrictEqual(
      {
        type:"SET/CURRANCY",
        value:{value:{"EGP": 10}}});

  });
});