import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Link to="home" style={{ textAlign: "center", fontSize: 32 }}>
            go to home
          </Link>
          <Link to="settings" style={{ textAlign: "center", fontSize: 32 }}>
            go to Settings
          </Link>
        </View>
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

export default connect(
  mapState,
  mapDispatch
)(Header);
