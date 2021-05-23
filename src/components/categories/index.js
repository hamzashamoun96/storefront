import React from "react";
import { connect } from "react-redux";
import { getPhones, getShirts } from "../../store/buy";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Categories(props) {
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
    <>
      <div>
        <h2>Select A Category</h2>
        <Button onClick={props.getShirts} color="primary">Shirts</Button>
        <Button onClick={props.getPhones} color="primary">Phones</Button>
      </div>

      <div className="container">

         {props.categoreies?.map((cat) => (
             <Card key={cat.name} className={cat.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={cat.image}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {cat.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {cat.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                startIcon={<ShoppingCartIcon />}
                variant="contained"
                size="small"
                color="primary"
              >
                Add To Cart
              </Button>
              <Button variant="contained" size="small" color="primary">
                View Details
              </Button>
            </CardActions>
          </Card>
        ))} 
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    categoreies: state.reducer1.categoreies,
  };
};
const mapDispatchToProps = { getPhones, getShirts };
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
