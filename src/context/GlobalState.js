import React, {createContext, useReducer} from 'react';
import items from '../data/data';

//Initial State
const initialState = items;

//Global Context
export const GlobalContext = createContext(initialState);

//Global Provider
export const GlobalProvider = ({children}) => {
  const [state,
    dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value>{children}</GlobalContext.Provider>
  );
}