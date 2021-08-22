import React from "react";
import { StyleSheet, View } from "react-native";
import PropTypes from "prop-types";
import { Text } from "@ui-kitten/components";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const BaseButton = ({ icon, text }) => {
  return (
    <View style={styles.root}>
      <View style={styles.content}>
        {icon ? <FontAwesomeIcon icon={icon} size={40} /> : null}
        {text ? <Text style={styles.text}>{text}</Text> : null}
      </View>
    </View>
  );
};

BaseButton.propTypes = {
  icon: PropTypes.object,
  text: PropTypes.string,
};

BaseButton.defaultProps = {
  icon: null,
  text: null,
};

const styles = StyleSheet.create({
  root: {
    width: 130,
    height: 130,
    backgroundColor: "#FCFCFC",
    borderColor: "#EDEDED",
    borderWidth: 1,
    borderRadius: 5,
    display: "flex",
    justifyContent: "center",
    margin: 5,
  },
  content: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    margin: 10,
  },
  text: {
    margin: 10,
    color: "#000000",
    fontWeight: "500",
  },
});

export default BaseButton;
