import React, { useCallback, useContext, useEffect, useState } from "react";
import SignInContainer from "layouts/authentication/signIn";
import { ConfigurationContext, OrmContext } from "core/contexts";

const Firewall = ({ children }) => {
  const { session, apiInstance } = useContext(ConfigurationContext);
  const orm = useContext(OrmContext);
  const ormSession = orm.session();
  const [fetchToken, setFetchToken] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    (async () => {
      const token = await session.getToken();
      setToken(token);
      setFetchToken(true);
    })();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await apiInstance.setToken(token).get("/api/user");

      if (response?.status === 200) {
        /* We fetch the user */
        const { user } = response?.data;
        /* We create the ORM User */
        ormSession.User.create(user);
        /* We create the ORM Teams */
        [...user.owned_teams, ...user.teams].forEach((team) =>
          ormSession.Team.create(team)
        );
      }
    } catch (err) {
      setToken(null);
      await session.clearToken();
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserData();
    }
  }, [token]);

  const connectCallback = useCallback(
    ({ data: { token } }) => {
      setToken(token);
      session
        .setToken(token)
        .then((r) => console.log("Okay !", r))
        .catch((r) => console.log("error", r));
    },
    [session]
  );

  if (token === null && fetchToken === true) {
    return <SignInContainer callback={connectCallback} />;
  }

  return children;
};

export default Firewall;
