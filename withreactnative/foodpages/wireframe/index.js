import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function NavigationC() {
  return (
    <View style={styles.NavigationC}>
      <View style={styles.Group887}>
        <View style={styles.SampleLogo}>
          <View style={styles.Group555}>
            <Image
              style={styles.Union}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/q1i2z48liud-I0%3A819%3B0%3A423?alt=media&token=bd0ca7a7-f49a-4183-9e7d-0de7c78d272c",
              }}
            />
            <Text style={styles.Photo}>photo</Text>
          </View>
          <Image
            style={styles.Union1}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/q1i2z48liud-I0%3A819%3B0%3A426?alt=media&token=dae371d2-3471-49fa-b770-59c66ae12f46",
            }}
          />
        </View>
        <Text style={styles.Features}>Features</Text>
        <Text style={styles.Pricing}>Pricing</Text>
        <Text style={styles.Community}>Community</Text>
        <Text style={styles.Support}>Support</Text>
        <View style={styles.Button}>
          <Text style={styles.LogIn}>Log in</Text>
        </View>
        <View style={styles.Button1}>
          <Text style={styles.Register}>Register</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  NavigationC: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 1680,
    height: 60,
    paddingLeft: 80,
    paddingRight: 80,
    paddingTop: 10,
    paddingBottom: 10,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  Group887: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  SampleLogo: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    boxSizing: "border-box",
  },
  Group555: {
    position: "absolute",
    top: 1.78,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 28.44,
    boxSizing: "border-box",
  },
  Union: {
    width: 22.52,
    height: 22.52,
  },
  Photo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: "28.44px",
    lineHeight: "28.44px",
    fontFamily: "Comfortaa, display",
    fontWeight: "400",
    textAlign: "center",
    letterSpacing: "-0.43px",
  },
  Union1: {
    position: "absolute",
    top: 2.96,
    width: 22.52,
    height: 22.52,
  },
  Features: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(24,160,251,1)",
    fontSize: "15px",
    lineHeight: "15px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: "-0.22px",
  },
  Pricing: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(24,160,251,1)",
    fontSize: "15px",
    lineHeight: "15px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: "-0.22px",
  },
  Community: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(24,160,251,1)",
    fontSize: "15px",
    lineHeight: "15px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: "-0.22px",
  },
  Support: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(24,160,251,1)",
    fontSize: "15px",
    lineHeight: "15px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: "-0.22px",
  },
  Button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 11,
    paddingBottom: 10,
    borderWidth: 1,
    borderColor: "rgba(24,160,251,1)",
    borderRadius: 6,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  LogIn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(24,160,251,1)",
    fontSize: "15px",
    lineHeight: "15px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: "-0.22px",
  },
  Button1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    paddingLeft: 34,
    paddingRight: 34,
    paddingTop: 13,
    paddingBottom: 12,
    borderRadius: 6,
    boxSizing: "border-box",
    backgroundColor: "rgba(24,160,251,1)",
  },
  Register: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(255,255,255,1)",
    fontSize: "15px",
    lineHeight: "15px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: "-0.22px",
  },
})
