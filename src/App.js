import React, { Component } from "react";
import { connect } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./containers/Header";
import Home from "./containers/Home";
import Settings from "./containers/Settings";

import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <Router style={styles.app}>
        <View>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/settings/" component={Settings} />
        </View>
      </Router>
    );
  }
}

const mapState = (state, ownProps) => ({
  count: state.count
});

const mapDispatch = dispatch => ({
  increment: payload => dispatch.count.increment(payload)
});

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});

export default connect(
  mapState,
  mapDispatch
)(App);
