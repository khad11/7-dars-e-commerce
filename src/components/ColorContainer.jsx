const colors = ["red", "green", "yellow", "blue", "aqua"];

import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function ColorContainer() {
  const { dispatch } = useContext(GlobalContext);
  return (
    <div className="align-elements mb-10">
      <ul className="flex float-end gap-2">
        {colors.map((color) => {
          return (
            <li
              onClick={() => dispatch({ type: "CHANGE_COLOR", payload: color })}
              key={color}
              className="w-7 h-7  border rounded-full cursor-pointer hover:border-red-500 "
              style={{ backgroundColor: color }}
            ></li>
          );
        })}
      </ul>
    </div>
  );
}
export default ColorContainer;
