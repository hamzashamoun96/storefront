export const getPhones = () => {
    return {
      type: "phones",
    };
  };
export const getShirts = () => {
    return {
      type: "shirts",
    };
};

export const addToCart = (product) =>{
  return {
    type:"ADDING",
    payload:product
  }
}

export const deleteCart = (name)=>{
  return {
    type:"DELETE",
    payload:name,
  }
}

export const reduceCount = (name) =>{
  return {
    type:"REDUCE_COUNT",
    payload:name,
  }
}
export const increaseCount = (name) =>{
  return {
    type:"INCREASE_COUNT",
    payload:name,
  }
}