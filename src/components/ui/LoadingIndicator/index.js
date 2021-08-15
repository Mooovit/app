import PropTypes from "prop-types";
import { Spinner } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";
import React from "react";

const LoadingIndicator = ({ style, size }) => (
  <View style={[style, styles.indicator]}>
    <Spinner size={size} />
  </View>
);

LoadingIndicator.propTypes = {
  size: PropTypes.oneOf(["tiny", "small", "medium", "large", "giant"]),
  style: PropTypes.object,
};

LoadingIndicator.defaultProps = {
  size: "small",
  style: {},
};

const styles = StyleSheet.create({
  indicator: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoadingIndicator;
