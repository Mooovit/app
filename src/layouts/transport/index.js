import React, { useState } from "react";
import { Layout, Text } from "@ui-kitten/components";
import ModelSelector from "./ModelSelector";
import { SafeAreaView, StyleSheet } from "react-native";

const Transport = () => {
  const [status, setStatus] = useState();
  const [location, setLocation] = useState();

  return (
    <Layout style={styles.container}>
      <SafeAreaView>
        <Text>Status : {status ? status.id : "nope !"}</Text>
        <Text>Location : {location ? location.id : "nope !"}</Text>

        <ModelSelector
          name="status"
          placeholder="Status"
          onSelect={setStatus}
        />
        <ModelSelector
          name="location"
          placeholder="Location"
          onSelect={setLocation}
        />
      </SafeAreaView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    flex: 1,
    margin: 2,
  },
});

export default Transport;
