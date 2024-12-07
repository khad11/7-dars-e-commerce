// path: /SingleProduct/:id
import { useLoaderData } from "react-router-dom";
import { axiosInstance } from "../utils/AxiosInstance";

export const loader = async ({ params }) => {
  const req = await axiosInstance.get("/products/" + params.id);

  const product = req.data;
  return { product };
};

function SingleProduct() {
  const { product } = useLoaderData();
  return (
    <div>
      <img className="m-auto" src={product.thumbnail} alt="f" />
      <h2 className=" text-3xl font-bold my-5">{product.title}</h2>
      <h3 className="text-2xl font-semibold my-5">
        $ {product.price}{" "}
        <span className="font-thin text-red-700 line-through italic ml-5">
          {product.discountPercentage}%
        </span>
      </h3>

      <q className="bg-base-300 p-1">{product.description}</q>
    </div>
  );
}

export default SingleProduct;
