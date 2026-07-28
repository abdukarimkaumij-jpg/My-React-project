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
        // 🔥 Xuddi shu category qayta bosilsa - filter bekor qilinadi (toggle)
        setSelectedCategory((prev) =>
            prev?.id === category_id?.id ? null : category_id
        );
    };

    const resetCategory = () => {
        setSelectedCategory(null);
    };

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <ContextProvider.Provider value={{
            category,
            selectedCategory,
            selectCategory,
            resetCategory
        }}>
            {children}
        </ContextProvider.Provider>
    );
};