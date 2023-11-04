// Action types
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Initial state
const initialState = {
  items: [],
};

// Reducer function
const cartReducer = (state = initialState, action)=> {
  switch(action.type){
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case REMOVE_FROM_CART:
      const updatedItems = state.items.filter((item)=> item.id !== action.payload);
      return {
        ...state,
        items: updatedItems,
      };
    default:
      return state;
  }
};


 
// Action creators
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const removeFromCart = (itemId) => ({
  type: REMOVE_FROM_CART,
  payload: itemId,
});

export default cartReducer;