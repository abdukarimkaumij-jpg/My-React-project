import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ContextProvider = createContext({});

export const useAuthContext = () => useContext(ContextProvider);

export const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);
    const token = localStorage.getItem("access_token");
    console.log(user)
    // 🔥 GET ME
    const getMe = async (customToken) => {
        const finalToken = customToken || token;

        if (!finalToken) {
            
            return;
        }

        try {
            const res = await axios.get(
                "https://nestmart-api-core.lovable.app/api/public/auth/me",
                {
                    headers: {
                        Authorization: `Bearer ${finalToken}`,
                    },
                }
            );

            setUser(res.data.data);
        } catch (error) {
            console.log("Auth error:", error);
            localStorage.removeItem("access_token");
            setUser(null);
        } 
    };
    useEffect(() => {
        getMe();
    }, []);

    // 🚪 LOGOUT
    const logout = () => {
        localStorage.removeItem("access_token");
        setUser(null);
    };

    return (
        <ContextProvider.Provider value={{ user}}>
            {children}
        </ContextProvider.Provider>
    );
};