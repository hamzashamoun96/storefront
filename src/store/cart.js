import uuid from 'react-uuid';
const initialState = []

const Cart = (state = initialState , action) =>{
    const {type , payload} = action;

    switch(type){
        case "ADDING" :
            payload.id = uuid()
            return [...state,payload];
        case "DELETE" :
            const afterDeleting = state.filter(ele => !(payload===ele.id))
            return afterDeleting
        default:
            return state;

    }
}

export default Cart;