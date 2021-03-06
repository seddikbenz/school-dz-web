import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class Settings extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>settings; count = {this.props.count}</Text>
        <Button onPress={() => this.props.increment(1)} title="click here" />
      </View>
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
  container: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Settings)
);
