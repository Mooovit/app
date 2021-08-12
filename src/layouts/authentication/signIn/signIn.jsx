import PropTypes from "prop-types";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Input, Text } from "@ui-kitten/components";
import { ImageOverlay } from "../extra/image-overlay.component";
import { ArrowForwardIcon } from "../extra/icons";
import { KeyboardAvoidingView } from "../extra/3rd-party";
import BoxImage from "../assets/boxes.jpg";
import { LoadingIndicator } from "componentsUI/index";

const SignIn = ({ onPress, loading, errors }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView>
      <ImageOverlay style={styles.container} source={BoxImage}>
        <View style={styles.signInContainer}>
          <Text style={styles.signInLabel} status="control" category="h4">
            SIGN IN
          </Text>
          <Button
            style={styles.signUpButton}
            appearance="ghost"
            status="control"
            size="giant"
            accessoryLeft={ArrowForwardIcon}
            onPress={null}
          >
            Sign Up
          </Button>
        </View>
        <View style={styles.formContainer}>
          <Input
            label="EMAIL"
            placeholder="Email"
            status="control"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            style={styles.passwordInput}
            secureTextEntry={true}
            placeholder="Password"
            label="PASSWORD"
            status="control"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        <Button
          status="control"
          size="large"
          disabled={!!loading}
          onPress={() =>
            onPress({
              email,
              password,
            })
          }
          accessoryLeft={loading ? LoadingIndicator : null}
        >
          SIGN IN
        </Button>
        {errors ? <Text>One or many errors happened during the sign in process</Text>}
      </ImageOverlay>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 24,
  },
  socialAuthContainer: {
    marginTop: 48,
  },
  evaButton: {
    maxWidth: 72,
    paddingHorizontal: 0,
  },
  formContainer: {
    flex: 1,
    marginTop: 48,
  },
  passwordInput: {
    marginTop: 16,
  },
  signInLabel: {
    flex: 1,
  },
  signUpButton: {
    flexDirection: "row-reverse",
    paddingHorizontal: 0,
  },
  socialAuthButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  socialAuthHintText: {
    alignSelf: "center",
    marginBottom: 16,
  },
});

SignIn.propTypes = {
  errors: PropTypes.any,
  loading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

SignIn.defaultProps = {
  errors: undefined,
  loading: false,
};

export default SignIn;
