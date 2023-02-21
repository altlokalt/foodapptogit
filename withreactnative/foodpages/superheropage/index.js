import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function SubPageHeroD() {
  return (
    <View style={styles.SubPageHeroD}>
      <Image
        style={styles.Group}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/qwjvzevg0uj-0%3A638?alt=media&token=3499a12f-b698-472b-a3c5-0d0d54281de9",
        }}
      />
      <View style={styles.Group217}>
        <View style={styles.TheLargestCommunityOfPhotoEnthusiasts}>
          <Text style={styles.LearnAboutAllTheFeat}>
            Learn about all the features of the Photo app
          </Text>
        </View>
        <Image
          style={styles.Rectangle}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/qwjvzevg0uj-0%3A635?alt=media&token=14541cf5-1359-4d57-99d7-57f0c14806fe",
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  SubPageHeroD: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 1680,
    height: 600,
    padding: 80,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Group: {
    position: "absolute",
    top: 234,
    left: 1159,
    width: 132,
    height: 132,
  },
  Group217: {
    position: "absolute",
    top: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  TheLargestCommunityOfPhotoEnthusiasts: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    paddingRight: 48,
    boxSizing: "border-box",
  },
  LearnAboutAllTheFeat: {
    color: "rgba(0,0,0,1)",
    fontSize: "48px",
    lineHeight: "150%",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "400",
    letterSpacing: "-0.72px",
  },
  Rectangle: {
    width: 750,
    height: "100%",
  },
})
