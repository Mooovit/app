import React from 'react';
const {Configuration} = require("./configuration");

export const ConfigurationProvider = React.createContext(Configuration);
export const UserProvider = React.createContext(null);
export const OrmProvider = React.createContext({});
