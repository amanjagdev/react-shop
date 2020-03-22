export default (state, action) => {
    switch(action.type) {
        case 'ADD_CART' : 
            // state.cart.forEach((item) => {
            //     if(item.id === action.payload.id){
            //       // Return a array with quantity increased
            //     }
            // });
            return {
                ...state,
                cart: [action.payload, ...state.cart]
            }
        case 'ADD_PRODUCT' :
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
        case 'DELETE_CART':
            // state.cart.forEach((item) => {
            //     if(item.id === action.payload.id){
            //       // Return a array with quantity decreased
            //     }
            // });
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}