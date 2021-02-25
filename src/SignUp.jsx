import React from 'react';
import Paper from "@material-ui/core/Paper";
import {Grid, Link, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
import validate from "./validate";

const styles = () => ({
  header: {
    marginBottom: 30
  },
  subheader: {
    marginBottom: 10
  },
  input: {
    marginBottom: 30
  },
  paper: {
    marginTop: 50,
    marginBottom: 50,
    padding: "45px 60px",
    // minWidth: 500,
    width: 500
  },
});

class SignUp extends React.Component {
  state = {
    values: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
    errors: {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    }
  };

  handleFormElement = (e) => {

    const {name, value} = e.target;
    const error = validate(name, value);

    this.setState({
      errors: {...this.state.errors, [name]: error}
    });
    this.setState({
      values: {...this.state.values, [name]: value}
    });
  };

  signUp = e => {
    e.preventDefault();
    if (Object.values(this.state.errors).filter(e => !!e).length) return;
    this.props.goToPage("map");
  }

  render() {
    const {goToPage, classes} = this.props;
    const {values, errors} = this.state;
    return (
      <Paper className={classes.paper}>
        <form onSubmit={this.signUp}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography className={classes.header} component="h1" variant="h4" align="left">
                Sign Up
              </Typography>
              <Typography className={classes.subheader} component="p" align="left">
                Already sign up?{" "}
                <Link onClick={(e) => {
                  e.preventDefault();
                  goToPage("login")
                }}>log in</Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                required
                name="email"
                type="email"
                label="Email"
                placeholder="Email"
                color="secondary"
                fullWidth
                onChange={this.handleFormElement}
                onBlur={this.handleFormElement}
                error={!!errors.email}
                value={values.email}
                helperText={errors.email}/>
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.input}
                required
                name="firstName"
                type="text"
                label="First name"
                placeholder="First name"
                color="secondary"
                fullWidth
                onChange={this.handleFormElement}
                onBlur={this.handleFormElement}
                error={!!errors.firstName}
                value={values.firstName}
                helperText={errors.firstName}/>
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.input}
                required
                name="lastName"
                type="text"
                label="Last name"
                placeholder="Last name"
                color="secondary"
                fullWidth
                onChange={this.handleFormElement}
                onBlur={this.handleFormElement}
                error={!!errors.lastName}
                value={values.lastName}
                helperText={errors.lastName}/>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                required
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
                color="secondary"
                fullWidth
                onChange={this.handleFormElement}
                onBlur={this.handleFormElement}
                error={!!errors.password}
                value={values.password}
                helperText={errors.password}/>
            </Grid>
            <Grid item xs={12} align="right">
              <Button color="primary" type="submit" variant="contained">Enter</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    );
  }
}

export default withStyles(styles)(SignUp);
