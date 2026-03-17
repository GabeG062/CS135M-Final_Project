import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ColorPicker() {
  const [setColor] = useState("grey")
  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity style={[
        styles.smallBox, {
          position: "absolute",
          right:0,
          top:0,
          backgroundColor: "red",
          }]}
        onPress={() => 
        {
          setColor("red")
        }} >
    </TouchableOpacity>
      <TouchableOpacity style={[
        styles.smallBox, {
          position: "absolute",
          right:100,
          top:0,
          backgroundColor: "green",
          }]}
        onPress={() => 
        {
          console.log("Color set to:", "green");
          setColor("green")
        }} >
            <TouchableOpacity style={[
        styles.smallBox, {
          position: "absolute",
          right:200,
          top:0,
          backgroundColor:"cyan",
          }]}
        onPress={() => 
        {
          console.log("Color set to:", "cyan");
          setColor("cyan")
        }} >
        </TouchableOpacity>
    </TouchableOpacity>
      <TouchableOpacity style={[
        styles.smallBox, {
          position: "absolute",
          right:300,
          top:0,
          backgroundColor: "blue",
          }]}
        onPress={() => 
        {
          console.log("Color set to:", "blue");
          setColor("blue")
        }}  >
    </TouchableOpacity>
      <TouchableOpacity style={[
        styles.smallBox, {
          position: "absolute",
          right:400,
          top:0,
          backgroundColor: "yellow",
          }]}
        onPress={() => 
        {
          console.log("Color set to:", "yellow");
          setColor("yellow")
        }} >
    </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
  },
  Box: {
    width: 100,
    height: 100,
    margin: 5,
    borderStyle: "clear",
    borderRadius: 10,
  },
});
