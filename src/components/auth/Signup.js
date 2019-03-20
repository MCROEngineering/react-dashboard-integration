import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/welcome');
    });
  };
  
  renderTextInputWithIcon = (icon, name, type, title) => (
    <div className='text-input'>
      <span className="text-input--icon">
        <i className={icon} />
      </span>
      <Field
        name={name}
        type={type}
        component='input'
        placeholder={title}
        autoComplete="none"
      />
    </div>
  );
  
  renderTextInput = (label, name, type, title) => (
    <div className='text-input'>
      <span className="text-input--icon">
        {label}
      </span>
      <Field
        name={name}
        type={type}
        component='input'
        placeholder={title}
        autoComplete="none"
      />
    </div>
  );
  
  render() {
    const { handleSubmit } = this.props;
  
    return (
      <div className='signup-container'>
        <div className='signup-container--card'>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div className="form-title">
              Register
              <span><br></br>Create your account</span>
            </div>
            {this.renderTextInputWithIcon('icon-user', 'email', 'text', 'Username')}
            {this.renderTextInput('@', 'email', 'text', 'Email')}
            {this.renderTextInputWithIcon('icon-lock', 'password', 'password', 'Password')}
            {this.renderTextInputWithIcon('icon-lock', 'repeat-password', 'password', 'Repeat Password')}
            <div>
              {this.props.errorMessage}
            </div>
            <button>Create Account</button>
          </form>
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
  reduxForm({ form: 'signup' })
)(Signup);
