import React, {createContext, useReducer} from 'react';
import data from '../data/data';
import AppReducer from './AppReducer'

//Initial State
const initialState = data;

//Global Context
export const GlobalContext = createContext(initialState);

//Global Provider
const GlobalProvider = ({children}) => {

  //Actions 
  const addToCart = (id) => {
    
  };

  //Maintaing State
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

export default GlobalProvider;