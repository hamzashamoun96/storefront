import React from "react";
import { connect } from "react-redux";
import { getPhones, getShirts } from "../../actions";
import Button from "@material-ui/core/Button";

function Categories(props) {

  return (
    <div className = "categories">
      <div className = "catBtns">
        <h1>Select A Category</h1>
        <Button onClick={(e)=>{
          props.getShirts()

          e.target.parentElement.nextElementSibling?.classList.remove('activeBtn')
          e.target.parentElement.classList.add('activeBtn')
        }} color="primary">Shirts</Button>
        <Button onClick={(e)=>{
          props.getPhones()

          e.target.parentElement.previousElementSibling?.classList.remove('activeBtn')
          e.target.parentElement.classList.add('activeBtn')
        }} color="primary">Phones</Button>
      </div>
      <br/>
      <hr/>
        {
          props.categories.categories.map((cat,idx)=>{
            if (cat.name === props.categories.activeCategory)
            return (<div key ={idx}><h2>{cat.displayName}</h2><h3>{cat.description}</h3></div>)
            
          })
        }
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    categories: state.catReducer,
  };
};
const mapDispatchToProps = { getPhones, getShirts };
export default connect(mapStateToProps, mapDispatchToProps)(Categories);