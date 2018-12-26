import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { Text, View, TextInput, Button } from "react-native";

import Auth from "./Auth";

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };
  login = () => {
    Auth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };
  render() {
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to="/" />;
    }
    return (
      <View>
        <Button title="lohdhdhgin" />
        <TextInput />
      </View>
    );
  }
}

export default withRouter(Login);
