import React, { useState, createContext, useContext } from "react";
import { getUserByCredentials, getUserById } from "../api/apiFunctions";


const UserContext = createContext();
const UserLogged = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function useUserLogged() {
    return useContext(UserLogged);
}

export const UserProvider = ({ children }) => {

    const [Logged, setLogged] = useState(false);
    const [User, setUser] = useState(null);
    
    const getUser = async (credentials) => {
        const id = 5;
        await getUserById(id).then((data) => {

            if (data) {

                setUser({ ...data})
                setLogged(true)
                return User;

            }
            else {
                alert("no llego el user");
            }
        });
        /* 
        await getUserByCredentials(credentials).then((data) => {

            if (data) {

                setUser({ ...data})
                window.localStorage.setItem('IdUser', data.IdUser)
                window.localStorage.setItem('Token', 360000)
                return User;

            }
            else {
                alert("no llego el user");
            }
        });
        */

    }

    const LogOut = () => {
        setUser(null)
        setLogged(false)
    }


    const changueLogin = () => {
        if (Logged === false) {
            getUser();
            setLogged(true);
        }
        else {
            LogOut()
        }
    }

    return <UserLogged.Provider value={{ Logged, changueLogin, getUser, LogOut }}>
        <UserContext.Provider value={User}>
            {children}

        </UserContext.Provider>
    </UserLogged.Provider>
}
