
import React, { useState } from "react";
import { View, Text, Button } from "react-native";
import TowRequest from "./screens/TowRequest";
import Payments from "./screens/Payments";

export default function App() {
  const [lang, setLang] = useState("en");
  const [tab, setTab] = useState("tow");

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 40 }}>
        <Button title="Tow Request" onPress={() => setTab("tow")} />
        <Button title="Payment" onPress={() => setTab("payment")} />
      </View>
      <View style={{ padding: 10 }}>
        <Button title={lang === "en" ? "বাংলা" : "English"} onPress={() => setLang(lang === "en" ? "bn" : "en")} />
      </View>
      {tab === "tow" ? <TowRequest lang={lang} /> : <Payments lang={lang} />}
    </View>
  );
}
