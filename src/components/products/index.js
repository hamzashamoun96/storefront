import React from "react";
import { connect } from "react-redux";
import { addToCart , reduceCount } from "../../actions";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


function Products(props) {
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
         props.products.products.map(pro =>{
             if(pro.category === props.categories.activeCategory){
                 return(
                    
                    <Card key={pro.name} className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={pro.image}
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {pro.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          {pro.description}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h4">
                          Price: {pro.cost}$
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h3">
                          In Stock: {pro.quantity}
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
                          props.addToCart(pro)
                          props.reduceCount(pro.name)
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

const mapStateToProps = (state) => {
    return {
      categories : state.catReducer,
      products: state.proReducer,
      cart: state.cartReducer,
    };
  };
  const mapDispatchToProps = { addToCart, reduceCount };
  export default connect(mapStateToProps, mapDispatchToProps)(Products);