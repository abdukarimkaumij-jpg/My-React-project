import axios from "axios";
import { createContext, useContext, useState } from "react";

const ContextProvider = createContext({});

export const useComentContext = () => useContext(ContextProvider);

export const ComentContext = ({ children }) => {
    const [coment, setComent] = useState([]);

    const getComments = async (productId) => {
        try {
            const res = await axios.get(
                `https://nestmart-api-core.lovable.app/api/public/products/${productId}/comments`
            );
            setComent(res.data?.data || []);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ContextProvider.Provider value={{ coment, getComments }}>
            {children}
        </ContextProvider.Provider>
    );
};