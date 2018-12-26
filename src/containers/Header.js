import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from "react-native";

import { UiButton } from "../components/Basics";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.location.pathname !== "/" && (
          <UiButton
            style={styles.backButton}
            title="Back"
            onPress={() => this.props.history.goBack()}
          />
        )}
        <Text style={styles.title}>
          {this.props.location.pathname !== "/" && this.props.location.pathname}
          {this.props.location.pathname === "/" && "Home"}
        </Text>
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
const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    backgroundColor: "#f5f5f6",
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    borderTopWidth: 1,
    borderTopColor: "#f5f5f6"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center"
  },
  backButton: {
    position: "absolute",
    left: 10
  }
});

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Header)
);
