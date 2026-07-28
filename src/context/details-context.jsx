import { createContext, useContext, useState, useCallback } from "react";
import axios from "axios";

const ProductDetailsContext = createContext();

export const useProductDetails = () => useContext(ProductDetailsContext);

export const ProductDetailsProvider = ({ children }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const getProductById = useCallback(async (id) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://nestmart-api-core.lovable.app/api/public/products/${id}`
      );
      setProduct(res.data.data.product);

    } catch (err) {
      console.log(err);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <ProductDetailsContext.Provider
      value={{ product, loading, getProductById }}
    >
      {children}
    </ProductDetailsContext.Provider>
  );
};