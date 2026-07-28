import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const ContextProvider = createContext({});

export const useRegisterContext = () => useContext(ContextProvider);

export const RegisterProvider = ({ children }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        full_name: "",
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

    const registerUser = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "https://nestmart-api-core.lovable.app/api/public/auth/register",
                formData
            );

            // TOKEN SAQLASH
            localStorage.setItem(
                "access_token",
                res.data.data.access_token
            );

            console.log(res.data.data.access_token);

            setSuccess("Successfully registered!");
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
                setFormData,
                handleChange,
                registerUser,
                error,
                success
            }}
        >
            {children}
        </ContextProvider.Provider>
    );
};