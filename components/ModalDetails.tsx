import React from "react";
import Modal from "react-native-modal";
import { Button, StyleSheet, View } from "react-native";

import Table from "./Table";

import { type TDetails } from "./Maps";

type TProps = {
  show: boolean;
  onClose: () => void;
  details: TDetails;
};

export default function ModalDetails({ show, onClose, details }: TProps) {
  return (
    <Modal isVisible={show} coverScreen={false} style={styles.container}>
      <View style={styles.content}>
        <Table {...details} />
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
});
