import React from "react";
import { deleteCart, increaseCountApi } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));



function Cart(props) {
  const api = "https://api-js401.herokuapp.com/api/v1/products";
  const state = useSelector((state) => {
    return {
      categories: state.catReducer,
      products: state.proReducer,
      cart: state.cartReducer,
    };
  });
  const dispatch = useDispatch();

  const classes = useStyles();
  return (
    <div className="chips">
      <FontAwesomeIcon onClick={()=>{
        document.querySelector('.chips').style.right = '-350px';
        document.querySelector('#blur').style.display = 'none';
        }} icon={faTimes}/>
      {state.cart.map((data, idx) => {
        return (
          <Chip
            key={idx}
            label={data.name}
            onDelete={() => {
              dispatch(deleteCart(idx));
              dispatch(increaseCountApi(api,data));
            }}
            className={classes.chip}
          />
        );
      })}
    </div>
  );
}
export default Cart;
