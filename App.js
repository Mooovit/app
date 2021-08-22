import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Configuration from "core/configuration";
import { ConfigurationContext, OrmContext } from "core/contexts";
import orm from "core/orm";
import Firewall from "containers/Firewall";
import Menu from "layouts/menu/Menu";
import { NativeRouter, Route } from "react-router-native";
import Transport from "layouts/transport";

// eslint-disable-next-line react/display-name
export default () => (
  <OrmContext.Provider value={orm}>
    <IconRegistry icons={EvaIconsPack} />
    <ConfigurationContext.Provider value={Configuration}>
      <ApplicationProvider {...eva} theme={{ ...eva.dark }}>
        <Firewall>
          <NativeRouter>
            <Route exact path="/" component={Menu} />
            <Route exact path="/transport" component={Transport} />
          </NativeRouter>
        </Firewall>
      </ApplicationProvider>
    </ConfigurationContext.Provider>
  </OrmContext.Provider>
);
