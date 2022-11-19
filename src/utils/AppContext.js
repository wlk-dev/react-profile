import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const initialState = {
        styles: {
            nav_item: {
                color: "whitesmoke",
                margin: "auto",
            }
        }
    };

    const [appState, setAppState] = useState(initialState)

    return (
        <AppContext.Provider value={{ appState, setAppState }}>
            {children}
        </AppContext.Provider>
    );
};
