import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const API = "https://nestmart-api-core.lovable.app/api/public/cart";

// 🔥 Har safar chaqirilganda localStorage'dan YANGI tokenni o'qiydi.
// Eski kod tokenni faqat provider mount bo'lganda bir marta o'qigan edi,
// shu sabab login qilgandan keyin sahifani yangilamasdan "Add to cart"
// ishlamas edi (token doim eski/null bo'lib qolardi).
const getToken = () => localStorage.getItem("access_token");

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 🧾 GET CART
  const getCart = async () => {
    const token = getToken();
    if (!token) {
      setCart([]);
      return;
    }

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
    const token = getToken();
    if (!token) {
      alert("Savatga qo‘shish uchun avval tizimga kiring!");
      return;
    }

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

      await getCart();
    } catch (err) {
      console.log("Add cart error:", err);
    }
  };

  // ❌ REMOVE
  const removeFromCart = async (item) => {
    const token = getToken();
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
    const token = getToken();
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

      await getCart();
    } catch (err) {
      console.log("Increase error:", err);
    }
  };

  // ➖ DECREASE
  const decreaseQuantity = async (item) => {
    const token = getToken();
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

      await getCart();
    } catch (err) {
      console.log("Decrease error:", err);
    }
  };

  useEffect(() => {
    getCart();

    // 🔥 Login/logout bo'lganda (shu tabda ham, boshqa tabda ham) cartni yangilash
    const handleAuthChange = () => getCart();
    window.addEventListener("authchange", handleAuthChange);
    window.addEventListener("storage", handleAuthChange);
    return () => {
      window.removeEventListener("authchange", handleAuthChange);
      window.removeEventListener("storage", handleAuthChange);
    };
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
