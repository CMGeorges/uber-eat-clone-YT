let defaultState = {
  selectedItems: {
    items: [],
    restaurantName: "",
  },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (action.payload.checkboxValue) {
        let newState = { ...state };
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
        return newState;
      } else {
        action.type = "REMOVE_ITEM";
      }

    case "REMOVE_ITEM":
     
        let newState = {...state};
        newState.selectedItems = {
          items: [state.selectedItems.items.filter(
            (item) => item.title !== action.payload.title
          ),],
          restaurantName: action.payload.restaurantName,
        }
      return newState;
    // case 'CLEAR_CART':
    //   return {
    //     ...state,
    //     selectedItems: {
    //       items: [], restaurantName: ''
    //     }
    //   }
    // case 'SET_RESTAURANT':
    //   return {
    //     ...state,
    //     selectedItems: {
    //       items:[...state.selectedItems.items,action.payload],
    //       restaurantName: action.payload
    //     }
    //   }
    default:
      return state;
  }
};

export default cartReducer;
