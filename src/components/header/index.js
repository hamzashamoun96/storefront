import React from "react";
import Cart from '../cart';
import { connect } from "react-redux";
import { getPhones, getShirts } from '../../actions';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
const toggleBar = ()=>{
  document.querySelector('.chips').style.right = '1px';
  document.querySelector('#blur').style.display = 'block';
}
  return (
    <AppBar position="static">
      <Toolbar className="appBar">
      <Typography variant="h5">ASAC STORE</Typography>
      <div className="hamBar">
        <Button color="inherit"> <ShoppingCartOutlinedIcon/>Cart {props.cart.length}</Button>
        <Cart/>
        <FontAwesomeIcon id="hamBars" icon={faBars} onClick = {toggleBar}/>
     </div>
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer,
  };
};
const mapDispatchToProps = { getPhones, getShirts };
export default connect(mapStateToProps, mapDispatchToProps)(Header);