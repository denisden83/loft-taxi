import React from 'react';

const validate = (name, value) => {
  function passwordIsValid(password) {
    return /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?!.*[^A-Za-z0-9])(?=.{5,10})/.test(password);
  }

  function emailIsValid(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
  }

  switch (name) {
    case "email":
      if (!emailIsValid(value)) return "Email is not valid";
      break;
    case "firstName":
      if (!value) return "First Name is required";
      break;
    case "lastName":
      if (!value) return "Last Name is required";
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
    const {goToPage} = this.props;
    const {values, errors} = this.state;
    console.log(values, errors);
    return (
      <>
        <h1>Sign Up</h1>
        <h4>Already signed up?
          <button onClick={(e) => {
            e.preventDefault();
            goToPage("login")
          }}>Log in
          </button>
        </h4>
        <form onSubmit={this.signUp}>
          <input type="email" name="email" value={values.email} onChange={this.handleFormElement}
                 onBlur={this.handleFormElement}
                 placeholder="Email *" required/><br/>
          {errors.email && <p>{errors.email}</p>}
          <input type="text" name="firstName" value={values.firstName} onChange={this.handleFormElement}
                 onBlur={this.handleFormElement}
                 placeholder="First Name *" required/>
          <input type="text" name="lastName" value={values.lastName} onChange={this.handleFormElement}
                 onBlur={this.handleFormElement}
                 placeholder="Last Name *" required/><br/>
          {errors.firstName && <p>{errors.firstName}</p>}
          {errors.lastName && <p>{errors.lastName}</p>}
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

export default SignUp;
