import React from 'react';
import { connect } from "react-redux";
import { deleteCart, increaseCount } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
      padding: theme.spacing(0.5),
      margin: 0,
    },
    chip: {
      margin: theme.spacing(0.5),
    },
}));

function Cart (props){
//  console.log(props)

      const classes = useStyles();

      return (
        <div className = "chips">
          {props.cart.map((data,idx) => {
            return (
                <Chip
                key={idx}
                  label={data.name}
                  onDelete={()=>{
                      props.deleteCart(data.id)
                      props.increaseCount(data.name)
                    }}
                  className={classes.chip}
                />
            );
          })}
        </div>
      );      

}
const mapStateToProps = (state) => {
    return {
      cart: state.cartReducer,
    };
  };
  const mapDispatchToProps = { deleteCart, increaseCount };
  export default connect(mapStateToProps, mapDispatchToProps)(Cart);