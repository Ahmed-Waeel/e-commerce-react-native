import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [counter, setCounter] = useState(0);

  const handleSignIn = () => {};

  const handleRegister = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Welcome</Text> */}

      <Image
        source={require("./assets/welcome_image.webp")}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        id="email"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        id="password"
      />

      <TouchableOpacity style={styles.button_1} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button_2} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button_3} onPress={handleRegister}>
        <Text style={styles.buttonText}>CLICK ME</Text>
        <Text style={styles.buttonText}>Counter : {counter}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button_1: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 100,
    marginTop: 10,
  },
  button_2: {
    backgroundColor: "#0000ff88",
    padding: 10,
    borderRadius: 100,
    marginTop: 10,
  },
  button_3: {
    backgroundColor: "#0000ff88",
    padding: 10,
    borderRadius: 100,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: 120,
    height: 70,
  },
});
