import React from 'react';

const validate = (name, value) => {
  function passwordIsValid(password) {
    return /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*[^A-Za-z0-9])(?=.{5,10})/.test(password);
  }

  switch (name) {
    case "userName":
      if (!value) return "User Name is required";
      break;
    case "password":
      if (!passwordIsValid(value)) {
        return "Password does not meet the policy requirements";
      }
      break;
    default:
      return;
  }
};

class LogIn extends React.Component {
  state = {
    values: {
      userName: "",
      password: "",
    },
    errors: {
      userName: "",
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

  logIn = e => {
    e.preventDefault();
    if (Object.values(this.state.errors).filter(e => !!e).length) return;
    this.props.goToPage("map");
  }

  render() {
    const {goToPage} = this.props;
    const {values, errors} = this.state;
    console.log(values, errors);
    return (
      <>
        <h1>Log In</h1>
        <h4>New user?
          <button onClick={(e) => {
            e.preventDefault();
            goToPage("signup")
          }}>Sign Up
          </button>
        </h4>
        <form onSubmit={this.logIn}>
          <input type="text" name="userName" value={values.userName} onChange={this.handleFormElement}
                 onBlur={this.handleFormElement}
                 placeholder="User Name *" required/><br/>
          {errors.userName && <p>{errors.userName}</p>}
          <input type="password" name="password" value={values.password} onChange={this.handleFormElement}
                 onBlur={this.handleFormElement}
                 placeholder="Password *" required/>
          {errors.password && <p>{errors.password}</p>}
          <ul style={{fontSize: "0.5em"}}>
            <li>from 5 to 10 symbols</li>
            <li>only latin letters and numbers</li>
            <li>must contain at least one capital <br/>and small letter, one number</li>
          </ul>
          <button type="submit">Enter</button>
        </form>
      </>
    );
  }
}

export default LogIn;
