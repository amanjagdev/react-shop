export default (state, action) => {
    switch(action.type) {
        case 'ADD_CART' : 
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }
        case 'ADD_PRODUCT' :
            return state;
        default:
            return state;
    }
}