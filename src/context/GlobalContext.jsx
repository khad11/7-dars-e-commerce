import { createContext, useEffect, useReducer } from "react";
import { formatPrice } from "../utils";

// FIRE BASE
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const dataFromLocalStorage = () => {
  return (
    JSON.parse(localStorage.getItem("products")) || {
      color: "",
      selectedProducts: [],
      totalPrice: 0,
    }
  );
};

export const GlobalContext = createContext();
const changeState = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user: payload,
      };
    case "AUTH_READY":
      return {
        ...state,
        authReady: true,
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, payload],
      };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        selectedProducts: payload,
      };
    case "CHANGE_AMOUNT":
      return {
        ...state,
        selectedProducts: payload,
      };
    case "CALCULATE":
      return {
        ...state,
        totalPrice: payload[0],
        totalAmount: payload[1],
      };
    case "CHANGE_COLOR":
      return { ...state, color: payload };
    default: {
      state;
    }
  }
};
export function GlobalContextProvider({ children }) {
  // constni  gullik qavsga orab qoyganim uchun ishlamadi {state, dispatch} !!!!!
  const [state, dispatch] = useReducer(changeState, {
    user: null,
    color: "",
    selectedProducts: [],
    totalPrice: 0,
    totalAmount: 0,
    authReady: false,
  });

  // calculate product
  const calculate = () => {
    let allPrice = 0;
    let allAmount = 0;

    if (state.selectedProducts.length) {
      state.selectedProducts.forEach((product) => {
        allPrice += product.price * product.amount;
        allAmount += product.amount;
      });
    }

    dispatch({
      type: "CALCULATE",
      payload: [formatPrice(allPrice), allAmount],
    });
  };

  // addProduct
  const addProduct = (product) => {
    dispatch({ type: "ADD_PRODUCT", payload: product });
    calculate();
  };

  //  remove  Product
  const removeProduct = (id) => {
    const filteredProduct = state.selectedProducts.filter(
      (product) => product.id !== id
    );
    dispatch({ type: "REMOVE_PRODUCT", payload: filteredProduct });
    calculate();
  };

  // change  amount
  const changeAmount = (id, ty) => {
    if (ty == "increase") {
      const changedProduct = state.selectedProducts.map((prod) => {
        if (prod.id == id) {
          return { ...prod, amount: prod.amount + 1 };
        } else {
          return prod;
        }
      });
      dispatch({ type: "CHANGE_AMOUNT", payload: changedProduct });
    } else if (ty == "decrease") {
      const changedProduct = state.selectedProducts.map((prod) => {
        if (prod.id == id) {
          return { ...prod, amount: prod.amount - 1 };
        } else {
          return prod;
        }
      });
      dispatch({ type: "CHANGE_AMOUNT", payload: changedProduct });
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "AUTH_READY" });
    });
  }, []);

  useEffect(() => {
    calculate();
  }, [state.selectedProducts]);

  return (
    <GlobalContext.Provider
      value={{ ...state, dispatch, removeProduct, addProduct, changeAmount }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
