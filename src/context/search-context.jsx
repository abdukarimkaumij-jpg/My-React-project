import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const SearchContext = createContext();

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");        // ✅ qo‘shildi
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchProducts = async (searchText) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `https://nestmart-api-core.lovable.app/api/public/products/search?q=${searchText}`
      );

      setResults(res.data.data.products);
    } catch (err) {
      console.error("Search error:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 query o‘zgarsa avtomatik qidiradi
  useEffect(() => {
    if (query.trim() !== "") {
      searchProducts(query);
    } else {
      setResults([]);
    }
  }, [query]);

  return (
    <SearchContext.Provider
      value={{
        query,        // ✅ qo‘shildi
        setQuery,     // ✅ qo‘shildi
        results,
        loading,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};