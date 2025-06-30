
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { t } from "../utils/translate";
import { firebase } from "../firebaseConfig";

export default function TowRequest({ lang }) {
  const [form, setForm] = useState({ name: "", phone: "", location: "", vehicle: "" });
  const [coords, setCoords] = useState(null);

  const handleSubmit = async () => {
    if (!form.name || !form.phone || !form.location || !form.vehicle) {
      return Alert.alert(t("Fill all fields", "সব তথ্য দিন", lang));
    }

    await firebase.collection("tow_requests").add({
      ...form,
      coords,
      timestamp: new Date(),
    });
    Alert.alert(t("Request submitted!", "রিকোয়েস্ট পাঠানো হয়েছে!", lang));
  };

  return (
    <View style={{ padding: 16 }}>
      {["name", "phone", "location", "vehicle"].map((field) => (
        <TextInput
          key={field}
          placeholder={t(field, field, lang)}
          onChangeText={(text) => setForm({ ...form, [field]: text })}
          style={{ borderBottomWidth: 1, marginBottom: 12 }}
        />
      ))}

      <MapView
        style={{ height: 200 }}
        initialRegion={{
          latitude: 23.8103,
          longitude: 90.4125,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onPress={(e) => setCoords(e.nativeEvent.coordinate)}
      >
        {coords && <Marker coordinate={coords} />}
      </MapView>

      <Button title={t("Submit", "সাবমিট", lang)} onPress={handleSubmit} />
    </View>
  );
}
