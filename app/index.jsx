import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [color,setColor] = useState("")
  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableOpacity style={[
        styles.Box, {
          position: "absolute",
          left:700,
          bottom:400,
          backgroundColor: "red",
          }]}
        onPress={() => setColor("red")} >
    </TouchableOpacity>
      <TouchableOpacity style={[
        styles.Box, {
          position: "absolute",
          left:900,
          bottom:400,
          backgroundColor: "lime",
          }]}
        onPress={() => setColor("lime")} >
    </TouchableOpacity>
      <TouchableOpacity style={[
        styles.Box, {
          position: "absolute",
          left:1100,
          bottom:400,
          backgroundColor: "cyan",
          }]}
        onPress={() => setColor("cyan")} >
    </TouchableOpacity>
      <TouchableOpacity style={[
        styles.Box, {
          position: "absolute",
          left:1300,
          bottom:400,
          backgroundColor: "yellow",
          }]}
        onPress={() => setColor("yellow")} >
    </TouchableOpacity>
      <TouchableOpacity style={[
        styles.Box, {
          position: "absolute",
          left:500,
          bottom:400,
          backgroundColor: "grey",
          }]}
        onPress={() => setColor("")} >
        <Text style={styles.text}>Clear</Text>
    </TouchableOpacity>
    <View>
    <Image source={require('../assets/images/Coloring-image.png')} style ={[
      styles.Icon, {
        position: 'absolute',
        top: 0,
        left: 800,
          }]} />
    <Image 
    source={require('../assets/images/Coloring-image.png')} 
    style={[
      styles.Icon, 
      {
        position: 'absolute',
        top: 0,
        left: 800,
        tintColor: color,
        opacity: 0.1
      }
    ]} 
  />
          </View>


    </SafeAreaView>
  );
  /*      <View 
    style={{
      ...StyleSheet.absoluteFillObject,
      backgroundColor: color,  // ← matches your box color
      opacity: 0.3,           // ← adjust this (0.1-0.5 works well)
      borderRadius: 10,       // ← match your Box borderRadius
    }}
  />*/
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    flexDirection: "row",
    //justifyContent: "center",
    //alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  Box: {
    width: 100,
    height: 100,
    margin: 5,
    borderStyle: "clear",
    borderRadius: 10,
  },
  Icon: 
  {
    margin: 10
  }
});
