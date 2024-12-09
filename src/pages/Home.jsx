import { axiosInstance } from "../utils/axiosInstance";

import ProductContainer from "../components/ProductContainer";

// loader
export const loader = async () => {
  const req = await axiosInstance.get("/products");
  const products = req.data.products;
  return { products };
};

function Home() {
  return <ProductContainer />;
}

export default Home;
