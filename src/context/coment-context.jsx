import axios from "axios";
import { createContext, useContext } from "react";

const ContextProvider = createContext({});

export const useComentContext = () => useContext(ContextProvider);

export const ComentContext = ({children}) => {
    
    <ComentContext.Provider value={{coment}}>
        {children}
    </ComentContext.Provider>
}