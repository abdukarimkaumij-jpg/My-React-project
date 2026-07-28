import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ContextProvider = createContext({});

export const useCategoryContext = () => useContext(ContextProvider);

export const CategoryContext = ({ children }) => {
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const getCategory = async () => {
        try {
            const response = await axios.get("https://nestmart-api-core.lovable.app/api/public/categories");
            setCategory(response.data.data);
        } catch (error) {
            console.log(error)
        }
    };

    const selectCategory = (category_id) => {
        setSelectedCategory(category_id);
    };

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <ContextProvider.Provider value={{
            category,
            selectedCategory,
            selectCategory
        }}>
            {children}
        </ContextProvider.Provider>
    );
};