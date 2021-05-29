import React from "react";
// import { connect } from "react-redux";
import { getDataApi, addToCart , reduceCountApi } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Products(props) {
  const api = 'https://api-js401.herokuapp.com/api/v1/products';
  const state = useSelector((state)=>{
    return {
      categories : state.catReducer,
      products: state.proReducer,
      cart: state.cartReducer,
  };
});
const dispatch = useDispatch();
useEffect(()=>{  
  dispatch(getDataApi(api))
},[])

  const useStyles = makeStyles({
        root: {
          width: 300,
        },
        media: {
          height: 200,
        },
      });
      const classes = useStyles();
  return (
    <div className="container">
     {
         state.products.products.map(pro =>{
             if(pro.category === state.categories.activeCategory){
                 return(
                    <Card key={pro.name} className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={pro.description?.split('$')[1]}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {pro.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {pro.description?.split('$')[0]}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h4">
                          Price: {pro.price}$
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h3">
                          In Stock: {pro.inStock}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button
                        startIcon={<ShoppingCartIcon />}
                        variant="contained"
                        size="small"
                        color="primary"
                        onClick={()=>{
                          dispatch(addToCart(pro))
                          dispatch(reduceCountApi(api, pro))
                        }}
                      >
                        Add To Cart
                      </Button>
                      <Button variant="contained" size="small" color="primary">
                        View Details
                      </Button>
                    </CardActions>
                  </Card>
                
                 )
        
             }
         })

}
</div>
  );
}
export default Products
// const mapStateToProps = (state) => {
//     return {
//       categories : state.catReducer,
//       products: state.proReducer,
//       cart: state.cartReducer,
//     };
//   };
// const mapDispatchToProps = { addToCart, reduceCount };
// export default connect(mapStateToProps, mapDispatchToProps)(Products);