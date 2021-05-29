const initialState = []

const Cart = (state = initialState , action) =>{
    const {type , payload} = action;

    switch(type){
        case "ADDING" :
            if(payload.inStock !== 0){
            return [...state,payload];
            }
            break
        case "DELETE" :
            const afterDeleting = state.filter((ele,idx) => !(payload===idx))
            return afterDeleting
        default:
            return state;

    }
}

export default Cart;