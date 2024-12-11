import { useGlobalContext } from "../hooks/useGlobalContext";

function TableRow({ price, title, brand, thumbnail, id, amount }) {
  const { changeAmount, removeProduct } = useGlobalContext();
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={thumbnail} alt={title} />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{brand}</div>
          </div>
        </div>
      </td>
      <td>
        <span className="badge badge-ghost badge-sm"> {price}</span>
      </td>
      <td>
        <div className="flex justify-center items-center gap-2">
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => changeAmount(id, "increase")}
          >
            +
          </button>
          <span className="text-xl">{amount}</span>
          <button
            className="btn btn-ghost btn-sm "
            onClick={() => {
              if (amount == 1) {
                removeProduct(id);
              } else {
                changeAmount(id, "decrease");
              }
            }}
          >
            -
          </button>
        </div>
      </td>
      <th>
        <button
          onClick={() => removeProduct(id)}
          className="btn btn-secondary btn-xs bg-pink-700 border-pink-700"
        >
          Delete
        </button>
      </th>
    </tr>
  );
}

export default TableRow;
