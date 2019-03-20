import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Signin extends Component {
  onSubmit = formProps => {
    this.props.signin(formProps, () => {
      this.props.history.push('/');
    });
  };
  
  renderTextInput = (icon, name, type, title) => (
    <div className='text-input'>
      <span className="text-input--icon">
        <i className={icon} />
      </span>
      <Field
        name={name}
        type={type}
        placeholder={title}
        component='input'
        autoComplete="none"
      />
    </div>
  );
  
  toRegister = () => {
    this.props.history.push('/signup');
  };
  
  render() {
    const { handleSubmit } = this.props;
  
    return (
      <div className='signin-container'>
        <div className='signin-container--card-group'>
          <div className='signin-container--card-group_card-body'>
            <div className='signin-container--card-group_card-body--form-container'>
              <form onSubmit={handleSubmit(this.onSubmit)}>
                <div className="form-title">
                  Login
                  <span><br></br>Sign In your account</span>
                </div>
                {this.renderTextInput('icon-user', 'email', 'text', 'Username')}
                {this.renderTextInput('icon-lock', 'password', 'password', 'Password')}
                <div>
                  {this.props.errorMessage}
                </div>
                <button>Sign In</button>
                <button className='register-button' onClick={() => this.toRegister()}>Register Now!</button>
              </form>
            </div>
          </div>
        <div className='signin-container--card-group_card-body'>
          <div className="card-title">
            Sign up
            <span><br></br>Create a new account</span>
          </div>
          <button onClick={() => this.toRegister()}>Register Now!</button>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage,
});

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: 'signin' })
)(Signin);
