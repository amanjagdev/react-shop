import React, {createContext, useReducer} from 'react';

//Initial State

const initialState = {
  main: [
    {
      id: 1,
      name: "Red Tshirt",
      price: 20,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto repellat di" +
          "cta, itaque veniam natus fugit consectetur voluptatem doloribus amet eos."
    }, {
      id: 2,
      name: "Green Tshirt",
      price: 30,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto repellat di" +
          "cta, itaque veniam natus fugit consectetur voluptatem doloribus amet eos."
    }
  ],
  cart: []
};

//global Context
export const GlobalContext = createContext(initialState);

//Global Provider
export const GlobalProvider = ({children}) => {
  const [state,
    dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value>{children}</GlobalContext.Provider>
  );
}