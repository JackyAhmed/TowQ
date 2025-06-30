
import React from "react";
import { View, Text, Image } from "react-native";
import { t } from "../utils/translate";

export default function Payments({ lang }) {
  return (
    <View style={{ padding: 16 }}>
      <Text>{t("Payment methods below:", "পেমেন্ট মাধ্যম:", lang)}</Text>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Image source={{ uri: "https://download.logo.wine/logo/BKash/BKash-Logo.wine.png" }} style={{ height: 50, width: 100 }} />
        <Text>bKash: 01XXXXXXXXX</Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image source={{ uri: "https://www.nagad.com.bd/themes/nagad/img/logo.png" }} style={{ height: 50, width: 100 }} />
        <Text>Nagad: 01XXXXXXXXX</Text>
      </View>
    </View>
  );
}
