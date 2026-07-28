import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ContextProvider = createContext({});

export const useProductsContext = () => useContext(ContextProvider);

const API = "https://nestmart-api-core.lovable.app/api/public/products";

export const ProductsContext = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getProducts = async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await axios.get(API);
            const data = res?.data?.data;

            setProducts(Array.isArray(data?.products) ? data.products : []);
        } catch (err) {
            console.log(err);
            setError("Products yuklanmadi ❌");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <ContextProvider.Provider value={{ products, loading, error }}>
            {children}
        </ContextProvider.Provider>
    );
};