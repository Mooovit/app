import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry, Text } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import Configuration from "core/configuration";
import { ConfigurationContext, OrmContext } from "core/contexts";
import orm from "core/orm";
import Firewall from "containers/Firewall";
import { StyleSheet } from "react-native";

export default () => (
  <OrmContext.Provider value={orm}>
    <IconRegistry icons={EvaIconsPack} />
    <ConfigurationContext.Provider value={Configuration}>
      <ApplicationProvider {...eva} theme={{ ...eva.dark }}>
        <Firewall>
          <Text style={styles.textLabel} status="control" category="h1">
            Welcome !
          </Text>
        </Firewall>
      </ApplicationProvider>
    </ConfigurationContext.Provider>
  </OrmContext.Provider>
);

const styles = StyleSheet.create({
  textLabel: {
    color: "#000000",
  },
});
