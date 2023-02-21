import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function HeroF() {
  return (
    <View style={styles.HeroF}>
      <Image
        style={styles.Group}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jl7j2tys4n-0%3A479?alt=media&token=b4cb1d5a-a30a-4f99-bc99-2f13fe45f4cc",
        }}
      />
      <View style={styles.Group979}>
        <View style={styles.Content}>
          <View style={styles.TheLargestCommunityOfPhotoEnthusiasts}>
            <Text style={styles.TheLargestCommunityO}>
              The largest community of photo enthusiasts
            </Text>
          </View>
          <View style={styles.Button}>
            <Text style={styles.JoinToday}>Join Today</Text>
          </View>
        </View>
        <Image
          style={styles.Rectangle}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/jl7j2tys4n-0%3A475?alt=media&token=a3bd7cd7-3323-476c-96a7-63dbb7dbdf70",
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  HeroF: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 1680,
    height: 960,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Group: {
    position: "absolute",
    top: 414,
    left: 1194,
    width: 132,
    height: 132,
  },
  Group979: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  Content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    paddingLeft: 80,
    paddingRight: 74,
    paddingTop: 354,
    paddingBottom: 354,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  TheLargestCommunityOfPhotoEnthusiasts: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingRight: 48,
    boxSizing: "border-box",
  },
  TheLargestCommunityO: {
    color: "rgba(0,0,0,1)",
    fontSize: "56px",
    lineHeight: "143%",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "400",
    letterSpacing: "-0.84px",
  },
  Button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    paddingLeft: 50,
    paddingRight: 51,
    paddingTop: 17,
    paddingBottom: 18,
    borderRadius: 6,
    boxSizing: "border-box",
    backgroundColor: "rgba(24,160,251,1)",
  },
  JoinToday: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: "17px",
    lineHeight: "17px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: "-0.26px",
  },
  Rectangle: {
    width: 840,
    height: "100%",
  },
})
