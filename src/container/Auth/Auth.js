import React, { Component } from "react";
import Input from "../../component/UI/Input/Input";
import Button from "../../component/UI/Button/Button";
import classes from "./Auth.module.css";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import * as actions from "../../store/actions/index";
import ToastMessage from "../../component/UI/ToastMessage/Toastmessage";
import Spinner from "../../component/UI/Spinner/Spinner";
import { isUserLogedIn } from "../../utils/constant";
class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "type",
        elementConfig: {
          type: "email",
          placeholder: "Enter the email"
        },
        value: "",
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: "password",
        elementConfig: {
          type: "password",
          placeholder: "Enter the password"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    show: false
  };
  checkValidity = (value, rules) => {
    let isValid = true;
    if (!rules) {
      return true;
    }
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.isEmail) {
      let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      isValid = reg.test(value) === true && isValid;
    }
    return isValid;
  };

  onchangeHandler = (event, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true
      }
    };
    this.setState({ controls: updatedControls });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value
    );
    this.setState({ show: true });
    setTimeout(() => {
      this.setState({ show: false });
    }, 3000);
  };
  render() {
    let formElementArray = [];
    for (let key in this.state.controls) {
      formElementArray.push({
        id: key,
        config: this.state.controls[key]
      });
    }
    let form = formElementArray.map(formElement => {
      return (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          inValid={!formElement.config.valid}
          changed={event => this.onchangeHandler(event, formElement.id)}
          touched={formElement.config.touched}
          shouldValidate={formElement.config.validation}
        ></Input>
      );
    });
    if (this.props.loading) {
      console.log("loaddd", this.props.loading);
      form = <Spinner></Spinner>;
    }
    let authRedirect = null;
    if (isUserLogedIn) {
      authRedirect = <Redirect to="/users"></Redirect>;
    }
    return (
      <div className={classes.mainAuth}>
        {authRedirect}
        <ToastMessage show={this.state.show}>
          {this.props.error || this.props.successMessage}
        </ToastMessage>
        <div className={classes.Auth}>
          <h1>Login</h1>
          <form onSubmit={this.onSubmitHandler}>
            {form}
            <Button btnType="Success">Login</Button>
          </form>
          <div className={classes.forgotPassword}>
            <Link to="">Forgot Password ?</Link>
          </div>
          <br></br>
          <br></br>
          <hr></hr>
          <div className={classes.loginWithOtp}>
            <Button btnType="Success">Login With OTP</Button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token != null,
    error: state.auth.error,
    loading: state.auth.loading,
    successMessage: state.auth.successMessage
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAuth: (email, password) => dispatch(actions.auth(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
