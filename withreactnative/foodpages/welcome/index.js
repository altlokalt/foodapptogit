import React from "react"
import { StyleSheet, Image, Text, View } from "react-native"

export default function Welcome() {
  return (
    <Image
      style={styles.Welcome}
      source={{
        uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/3ybk6culzea-0%3A799?alt=media&token=d8da8ba4-dd7a-44d3-9b79-81a978495cf8",
      }}
    />
  )
}

const styles = StyleSheet.create({
  Welcome: {
    width: 4832,
    height: 4747,
  },
})
