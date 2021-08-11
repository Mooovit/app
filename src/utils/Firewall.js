import React, {useContext, useEffect, useState} from "react";
import Login from "../layouts/authentication/Login";
import {ConfigurationProvider, UserProvider, OrmProvider} from "../configuration";

const Firewall = ({ children }) => {
    const { tokenSession, apiInstance } = useContext(ConfigurationProvider)
    const orm = useContext(OrmProvider)
    const session = orm.session();

    const [token, setToken] = useState(tokenSession.getToken());
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!token) return () => {};

        const fetchUserData = async () => {
            const response = await apiInstance.setToken(token).get("/api/user");
            if(response?.status === 200) {
                /* We fetch the user */
                const { user } = response?.data;
                /* We set the user in the state */
                setUser(user)
                /* We create the ORM User */
                session.User.create(user);
                /* We create the ORM Teams */
                const allTeams = Object.assign([], user.owned_teams)
                allTeams.push(user.teams);
                allTeams.forEach((team) => {
                    session.Team.create(team)
                })
            }
            return user;
        };

        fetchUserData()
    }, [token])

    const connectCallback = ({ data }) => {
        const { token } = data;
        setToken(token);
        tokenSession.setToken(token)
    }

    if (!token) return <Login callback={connectCallback}/>

    return <UserProvider.Provider value={user}>{ children }</UserProvider.Provider>
}

export default Firewall;
