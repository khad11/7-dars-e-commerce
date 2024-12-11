import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext () mustbe in the  GlobalContextProvider()"
    );
  }
  return context;
};
