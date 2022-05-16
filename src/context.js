import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

// set initial state for 'reducer'
const initialState = {
   loading: false,
   cart: cartItems,
   // total start with 0
   total: 0,
   // item in the cart
   amount: 0,
};

const AppProvider = ({ children }) => {
   // past in initialstate into reducer
   const [state, dispatch] = useReducer(reducer, initialState);

   // some functions triggered by using dispatch
   // Clear button
   const clearCart = () => {
      dispatch({ type: 'CLEAR_CART' });
   };
   //  Remove Single Item from cart
   const remove = (id) => {
      dispatch({ type: 'REMOVE', payload: id });
   };
   //  looking for the ID to increase price
   const increase = (id) => {
      dispatch({ type: 'INCREASE', payload: id });
   };
   const decrease = (id) => {
      dispatch({ type: 'DECREASE', payload: id });
   };

   // everytime when the cart is changed
   useEffect(() => {
      dispatch({ type: 'GET_TOTALS' });

   }, [state.cart]);

   return (
      <AppContext.Provider
         value={{
            ...state,
            clearCart,
            remove,
            increase,
            decrease,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};
// make sure use
export const useGlobalContext = () => {
   return useContext(AppContext);
};

export { AppContext, AppProvider };
