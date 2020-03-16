import React, {createContext, useReducer} from 'react';
import data from '../data/data';
import AppReducer from './AppReducer'

//Initial State
const initialState = data;

//Global Context
export const GlobalContext = createContext(initialState);

//Global Provider
export const GlobalProvider = ({children}) => {
  const [state,
    dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
      items: state.items,
      cart: state.cart
    }}>{children}</GlobalContext.Provider>
  );
}