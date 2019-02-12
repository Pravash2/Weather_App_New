import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";

const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    margin: "0 auto",
    marginTop: "10px"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};

function CustomizedInputBase(props) {
  const { classes } = props;



  return (
      <form onSubmit={props.onFormSubmits}>
    <Paper className={classes.root} elevation={1}>
      <InputBase
        onChange={props.handel}
        className={classes.input}
        placeholder="Get a five-day forecast in your favorite cities"
      />
      <Divider className={classes.divider} />
      <IconButton type='submit' className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
    </form>
  );
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputBase);
