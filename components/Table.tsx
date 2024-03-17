import React from "react";
import { StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

import { type TDetails } from "./Maps";

export default function Table({
  municipality,
  zipCode,
  region,
  province,
}: TDetails) {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Municipality</DataTable.Title>
        <DataTable.Title>Zip Code</DataTable.Title>
        <DataTable.Title>Region</DataTable.Title>
        <DataTable.Title>Province</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>{municipality}</DataTable.Cell>
        <DataTable.Cell>{zipCode}</DataTable.Cell>
        <DataTable.Cell>{region}</DataTable.Cell>
        <DataTable.Cell>{province}</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: "#DCDCDC",
  },
});
