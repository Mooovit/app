import PropTypes from "prop-types";
import React, { useCallback, useContext, useState } from "react";
import { ConfigurationContext } from "core/contexts";
import SignIn from "./signIn";

const SignInContainer = ({ callback }) => {
  const { apiInstance } = useContext(ConfigurationContext);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  const handleOnPress = useCallback(
    ({ email, password }) => {
      /* TODO : Remove this later ... that's just for easy debug on compiled application */
      if (email.substr(0, 4) === "set#") {
        const split = email.split("#");
        const action = split[1];
        const value = split[2];
        switch (action) {
          case "url":
            apiInstance.setBaseURL(value);
            break;
        }
        return;
      }

      setLoading(true);
      apiInstance
        .post("/api/authenticate", {
          email,
          password,
        })
        .then((params) => {
          setErrors(null);
          callback(params);
        })
        .catch((error) => {
          setErrors(error);
        })
        .finally(() => setLoading(false));
    },
    [apiInstance]
  );

  return <SignIn onPress={handleOnPress} loading={loading} errors={errors} />;
};

SignInContainer.propTypes = {
  callback: PropTypes.func.isRequired,
};

export default SignInContainer;
