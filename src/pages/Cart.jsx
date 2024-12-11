//  global constext
import { Link } from "react-router-dom";
import { TableRow } from "../components";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";

function Cart() {
  const { selectedProducts, totalAmount, totalPrice } = useGlobalContext();

  if (selectedProducts.length == 0) {
    return (
      <div className="flex justify-start items-center flex-col gap-3">
        <h1 className="text-3xl font-bold  ">
          You don't have any product please select product!
        </h1>
        <Link to="/" className="btn btn-primary ">
          go buy
        </Link>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name:</th>
            <th>Price:</th>
            <th>Amount:</th>
            <th>btn</th>
          </tr>
        </thead>
        <tbody>
          {selectedProducts.map((product) => {
            return (
              <TableRow
                key={product.id}
                id={product.id}
                price={product.price}
                thumbnail={product.thumbnail}
                title={product.title}
                amount={product.amount}
                brand={product.brand}
              />
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-10">
        <h3 className="text-xl font-bold">Total Price:{totalPrice}</h3>
        <h3 className="text-xl font-bold">Total Amount: {totalAmount}</h3>
      </div>
    </div>
  );
}
export default Cart;
