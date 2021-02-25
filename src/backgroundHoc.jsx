import React, {Component} from "react";
import {Grid, Paper} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {Logo} from "loft-taxi-mui-theme";
import backgroundImg from "./login-background.jpg"

const styles = () => ({
  background: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover"
  }
});

export default function backgroundHoc (WrappedComponent) {
  class BackgroundHocWrapper extends Component {
    render() {
      const {classes, ...rest} = this.props;
      return (
        <Paper className={classes.background}>
          <Grid
            container
            direction="row"
            alignItems="center"
            justify="center"
            style={{minHeight: "100vh"}}
          >
            <Grid item xs={3}>
              <Logo white animated/>
            </Grid>
            <Grid item xs={3}>
              <WrappedComponent {...rest}/>
            </Grid>
          </Grid>
        </Paper>
      )
    }
  }

  return withStyles(styles)(BackgroundHocWrapper);
}