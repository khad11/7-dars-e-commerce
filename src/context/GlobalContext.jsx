import { createContext, useEffect, useReducer } from "react";

const dataFromLocalStorage = () => {
  return (
    JSON.parse(localStorage.getItem("products")) || [
      {
        color: "",
        selectedProducts: [1, 2],
      },
    ]
  );
};

export const GlobalContext = createContext();
const changeState = (state, action) => {
  const { type, payload } = action;
  // console.log(action);
  switch (type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, payload],
      };
    case "CHANGE_COLOR":
      return { ...state, color: payload };
  }
};
export function GlobalContextProvider({}) {
  // constni  gullik qavsga orab qoyganim uchun ishlamadi {state, dispatch} !!!!!
  const [state, dispatch] = useReducer(changeState, dataFromLocalStorage());

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(state));
  }, [state]);
  // const changeColor = (color) => {
  //   dispatch({ type: "CHANGE_COLOR", payload: color });
  // };
  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {}
    </GlobalContext.Provider>
  );
}
