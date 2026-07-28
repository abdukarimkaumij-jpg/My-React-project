import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const useWishlistContext = () => useContext(WishlistContext);

export default function WishlistProvider({ children }) {
    const [wishlist, setWishlist] = useState([]);

    const getWishlist = async () => {
        try {
            const token = localStorage.getItem("access_token");
            if (!token) return;

            const { data } = await axios.get(
                "https://nestmart-api-core.lovable.app/api/public/wishlist",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setWishlist(data.data);
        } catch (err) {
            console.log(err.response?.data || err.message);
        }
    };

    const addWishlist = async (productId) => {
        try {
            const token = localStorage.getItem("access_token");

            await axios.post(
                "https://nestmart-api-core.lovable.app/api/public/wishlist",
                {
                    product_id: productId,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            getWishlist();
        } catch (err) {
            console.log(err.response?.data || err.message);
        }
    };

    useEffect(() => {
        getWishlist();
    }, []);

    return (
        <WishlistContext.Provider value={{ wishlist, addWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}