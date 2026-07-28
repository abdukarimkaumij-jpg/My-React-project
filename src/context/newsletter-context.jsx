import { createContext, useContext, useState } from "react";
import axios from "axios";

const NewsletterContext = createContext();

export const useNewsletterContext = () => useContext(NewsletterContext);

export const NewsletterProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const subscribeNewsletter = async (email) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const res = await axios.post(
        "https://nestmart-api-core.lovable.app/api/public/newsletter",
        {
          email: email,
        }
      );

      console.log("Newsletter success:", res.data);
      setSuccess(true);
    } catch (err) {
      console.error("Newsletter error:", err);
      setError("Xatolik yuz berdi ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <NewsletterContext.Provider
      value={{ subscribeNewsletter, loading, success, error }}
    >
      {children}
    </NewsletterContext.Provider>
  );
};