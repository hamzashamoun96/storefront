import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

function Header(props) {
  return (
    <AppBar position="static">
      <Toolbar className="appBar">
      <Typography variant="h6">ASAC STORE</Typography>
        <Button color="inherit">Cart</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
