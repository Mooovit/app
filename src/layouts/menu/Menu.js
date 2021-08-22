import BaseButton from "../../components/ui/Buttons/BaseButton";
import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import {
  faBoxOpen,
  faQrcode,
  faPeopleCarry,
  faWarehouse,
  faTasks,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-native";

const Menu = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <BaseButton icon={faBoxOpen} text={"Mes objets"} />
        <BaseButton icon={faQrcode} text={"Scanner"} />
      </View>
      <View style={styles.row}>
        <Link to="/transport">
          <BaseButton icon={faPeopleCarry} text={"Transport"} />
        </Link>
        <BaseButton icon={faWarehouse} text={"Localisation"} />
      </View>
      <View style={styles.row}>
        <BaseButton icon={faTasks} text={"Statut"} />
        <BaseButton icon={faCogs} text={"Préférences"} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  row: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  scrollView: {
    backgroundColor: "pink",
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

export default Menu;
