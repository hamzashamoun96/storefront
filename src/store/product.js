const initialState = {
    products : []
}

const buy = (state = initialState , action) =>{
    const {type , payload} = action;

    switch(type){
        case 'GET' :
            return payload
        case"INCREASE_COUNT" :
        console.log(state)
            return state
        case "REDUCE_COUNT" :
            return state
        default:
            return state;

    }
}

export default buy;