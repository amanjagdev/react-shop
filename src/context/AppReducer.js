export default (state, action) => {
    switch(action.type) {
        case 'ADD_CART' :
            console.log(action.payload.id);
            const temp = state.cart.filter(item => item.id === action.payload.id)
            const restArray = state.cart.filter(item => item.id !== action.payload.id)
            console.log(temp);
            if(temp[0] != null){
                temp[0].qty++;
                return {
                    ...state,
                    cart: [temp[0], ...restArray]
                }
            }
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