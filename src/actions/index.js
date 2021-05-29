import axios from 'axios';

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

export const deleteCart = (idx)=>{
  return {
    type:"DELETE",
    payload:idx,
  }
}

export const getDataApi = function (api) {
  return (dispatch) => {
    return axios.get(api).then((response)=>{
      dispatch(getAction({products:response.data.results}))
    })
  }
}

export const getAction = (payload) =>{
  return {
    type : 'GET',
    payload,
  }
}

export const reduceCountApi = function (api, pro){
  return (dispatch) => {
    if(pro.inStock !== 0){
      pro.inStock--;
      return axios.put(`${api}/${pro._id}`,pro).then(()=>{
        dispatch(reduceActionCount())
      })
    }
  }
}

export const reduceActionCount = () =>{
  return {
    type:"REDUCE_COUNT",
  }
}
export const increaseCountApi = function (api, pro){
  pro.inStock++;
  
  return (dispatch) => {
    return axios.put(`${api}/${pro._id}`,pro).then(()=>{
      dispatch(increaseActionCount(pro))
    })
  }
}

export const increaseActionCount = (name) =>{
  return {
    type:"INCREASE_COUNT",
    payload:name,
  }
}