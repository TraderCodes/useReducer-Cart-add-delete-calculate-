// state = current state before the update
// action = what we trying to do

const reducer = (state, action) => {
   // return state if nothing match
   if (action.type === 'CLEAR_CART') {
      // ...state means return the orginal state , but cart with empty array
      //   which is set in  CartContainer
      return { ...state, cart: [] };
   }

   return state;
};
export default reducer;
