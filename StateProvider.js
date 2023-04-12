import React, {createContext, userContext, userReducer} from "react";
export const StateContext = createContext();
export const Stateprovider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
export const useStatevalue = {} => useContext{StateContext};