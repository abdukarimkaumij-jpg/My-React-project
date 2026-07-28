import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ContextProvider = createContext({});

export const useLoginContext = () => useContext(ContextProvider);

export const LoginContext = ({ children }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const loginUser = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "https://nestmart-api-core.lovable.app/api/public/auth/login",
                formData
            );
            localStorage.setItem(
                "access_token",
                res.data.data.access_token
            );

            setSuccess("Successfully logged in!");
            setError("");

            navigate("/");

        } catch (err) {
            setError(err.response?.data?.message || err.message);
            setSuccess("");
        }
    };

    return (
        <ContextProvider.Provider
            value={{
                formData,
                handleChange,
                loginUser,
                error,
                success
            }}
        >
            {children}
        </ContextProvider.Provider>
    );
};