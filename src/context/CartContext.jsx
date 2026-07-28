import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const API = "https://nestmart-api-core.lovable.app/api/public/cart";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const token = localStorage.getItem("access_token");

  // 🧾 GET CART
  const getCart = async () => {
    if (!token) return;

    try {
      const res = await axios.get(API, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCart(res.data?.data?.items || []);
    } catch (err) {
      console.log("Cart error:", err);
    }
  };

  // ➕ ADD
  const addToCart = async (productId, quantity = 1) => {
    if (!token) return;

    try {
      await axios.post(
        API,
        {
          product_id: productId,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      getCart();
    } catch (err) {
      console.log("Add cart error:", err);
    }
  };

  // ❌ REMOVE (🔥 ASOSIY FIX SHU YERDA)
  const removeFromCart = async (item) => {
    if (!token) return;

    const itemId = item?.id; // ⚠️ item.id bo‘lishi shart

    if (!itemId) {
      console.log("Item ID topilmadi ❌", item);
      return;
    }

    try {
      await axios.delete(`${API}/${itemId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // UI ni darhol yangilaymiz
      setCart((prev) => prev.filter((i) => i.id !== itemId));
    } catch (err) {
      console.log("Remove cart error:", err);
    }
  };

  // ➕ INCREASE
  const increaseQuantity = async (item) => {
    if (!token) return;

    try {
      await axios.post(
        API,
        {
          product_id: item?.product?.id, // ⚠️ ID FIX
          quantity: item.quantity + 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      getCart();
    } catch (err) {
      console.log("Increase error:", err);
    }
  };

  // ➖ DECREASE
  const decreaseQuantity = async (item) => {
    if (!token) return;

    if (item.quantity <= 1) {
      removeFromCart(item);
      return;
    }

    try {
      await axios.post(
        API,
        {
          product_id: item?.product?.id,
          quantity: item.quantity - 1,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      getCart();
    } catch (err) {
      console.log("Decrease error:", err);
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        getCart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};