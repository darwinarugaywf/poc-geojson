import React, { useState } from "react";
import MapView, { Geojson } from "react-native-maps";
import { View, StyleSheet, Dimensions, StatusBar } from "react-native";

import ModalDetails from "./ModalDetails";

import geojsonData from "../LAUNION.json";

export type TDetails = {
  municipality: string;
  zipCode: string;
  region: string;
  province: string;
};

export default function GoogleMaps() {
  const [details, setDetails] = useState<TDetails | null>(null);

  // const onPressBoundary = (data) => {
  //   setDetails({
  //     municipality: data.feature.properties?.MUNICIPALI,
  //   });
  // };

  const closeModal = () => setDetails(null);
  const displayModal = Boolean(details);

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <MapView
        style={styles.map}
        provider="google"
        // TODO: Recheck delta value
        initialRegion={{
          latitude: 16.6159,
          longitude: 120.3209,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Geojson
          tappable
          geojson={geojsonData as any}
          tracksViewChanges
          strokeColor="#D05136"
          fillColor="#F3B1A3"
          strokeWidth={5}
          onPress={(data) => {
            const properties = data.feature.properties;
            setDetails({
              municipality: properties?.MUNICIPALI,
              zipCode: properties?.ZIPCODE,
              region: properties?.REGION,
              province: properties?.PROVINCE,
            });
          }}
        />
      </MapView>
      {details && (
        <ModalDetails
          show={displayModal}
          onClose={closeModal}
          details={details}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
