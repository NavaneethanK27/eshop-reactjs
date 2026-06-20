export const initialState = {
    basket: [],
};

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            const newBasket = [...state.basket];
            const index = newBasket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            return {
                ...state,
                basket: newBasket,
            };
        default:
            return state;
    }
};
