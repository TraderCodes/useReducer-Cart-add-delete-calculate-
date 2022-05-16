// state = current state before the update
// action = what we trying to do

const reducer = (state, action) => {
   // return state if nothing match
   if (action.type === 'CLEAR_CART') {
      // ...state means return the orginal state , but cart with empty array
      //   which is set in  CartContainer
      return { ...state, cart: [] };
   }

   //    remove
   if (action.type === 'REMOVE') {
      return {
         ...state,
         //  return the id thats not == to the current payload which is the ID
         cart: state.cart.filter((item) => item.id !== action.payload),
      };
   }
   //    increase and decrease
   if (action.type === 'INCREASE') {
      let tempCart = state.cart.map((item) => {
         if (item.id === action.payload) {
            // return the amount in the current and change the item amount +1
            //  have to return the current select item which is ...item
            return { ...item, amount: item.amount + 1 };
         }
         console.log(item);
         return item;
      });
      return { ...state, cart: tempCart };
   }
   if (action.type === 'DECREASE') {
      let tempCart = state.cart
         .map((item) => {
            if (item.id === action.payload) {
               return { ...item, amount: item.amount - 1 };
            }
            console.log(item);
            return item;
            //  filter cart item amount to not be negative
         })
         .filter((item) => item.amount !== 0);
      return { ...state, cart: tempCart };
   }

   return state;
};
export default reducer;
