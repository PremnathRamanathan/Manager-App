import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Button, Input, Spinner } from './common';


class LoginForm extends Component {

onButtonPress() {
  const { email, password } = this.props;
  this.props.loginUser({ email, password });
}

onEmailChange(text) {
  this.props.emailChanged(text);
}

onPasswordChange(password) {
  this.props.passwordChanged(password);
}

renderButton() {
 if (this.props.loading) {
    return <Spinner size='small' />;
  }
  return (
    <Button onPress={this.onButtonPress.bind(this)} >
    Log In
    </Button>
  );
}

renderError() {
  if (this.props.error) {
    return (
      <View style={{ backgroundColor: 'White' }}>
       <Text style={styles.errorTextStyle}>
       {this.props.error}
       </Text>
      </View>
    );
  }
}

  render() {
      return (
        <Card>
          <CardSection>
            <Input
            label="Email"
            placeHolder="user@gmail.com"
            value={this.props.email}
            onChangeText={this.onEmailChange.bind(this)}
            />
          </CardSection>
          <CardSection>
            <Input
            secureTextEntry
            label="Password"
            placeHolder="password"
            value={this.props.password}
            onChangeText={this.onPasswordChange.bind(this)}
            />
          </CardSection>

          {this.renderError()}

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      );
    }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = state => {
  return {
    email: state.Auth.email,
    password: state.Auth.password,
    error: state.Auth.error,
    loading: state.Auth.loading
  };
};


export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
