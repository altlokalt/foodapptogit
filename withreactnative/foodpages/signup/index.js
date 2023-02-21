import React from "react"
import { StyleSheet, Image, Text, View, ImageBackground } from "react-native"

export default function Signup() {
  return (
    <View style={styles.Signup}>
      <View style={styles.Group230}>
        <View style={styles.SignupA}>
          <View style={styles.TheLargestCommunityOfPhotoEnthusiasts}>
            <Text style={styles.ReadyToTakeAFreeTria}>
              Ready to take a free trial?
            </Text>
            <Text style={styles.LoremIpsumDolorSitAm}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </Text>
          </View>
          <View style={styles.Group}>
            <Text style={styles.SignUpForAFreeAccoun}>
              Sign up for a free account
            </Text>
            <View style={styles.Group189}>
              <View style={styles.Group8106}>
                <Text style={styles.FirstName}>First name</Text>
              </View>
              <View style={styles.Group341}>
                <Text style={styles.LastName}>Last name</Text>
              </View>
            </View>
            <View style={styles.Group6910}>
              <Text style={styles.EmailAddress}>Email address</Text>
            </View>
            <View style={styles.Group608}>
              <Text style={styles.CreatePassword}>Create password</Text>
            </View>
            <View style={styles.Button}>
              <Text style={styles.Register}>Register</Text>
            </View>
          </View>
        </View>
        <View style={styles.SignupB}>
          <Text style={styles.LoremIpsumDolorSitAm1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Text>
          <View style={styles.Button1}>
            <Text style={styles.JoinToday}>Join Today</Text>
          </View>
        </View>
        <View style={styles.SignupC}>
          <Text style={styles.LoremIpsumDolorSitAm2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </Text>
          <View style={styles.Button2}>
            <Text style={styles.JoinToday1}>Join Today</Text>
          </View>
          <View style={styles.Button3}>
            <Text style={styles.ContactUs}>Contact us</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Signup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 1840,
    height: 1881,
    padding: 80,
    boxSizing: "border-box",
    backgroundColor: "rgba(242,242,242,1)",
  },
  Group230: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
  },
  SignupA: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingLeft: 144,
    paddingRight: 144,
    paddingTop: 120,
    paddingBottom: 120,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  TheLargestCommunityOfPhotoEnthusiasts: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    boxSizing: "border-box",
  },
  ReadyToTakeAFreeTria: {
    position: "absolute",
    top: "0%",
    bottom: "0%",
    left: "28.99%",
    right: "28.99%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,1)",
    fontSize: "48px",
    lineHeight: "150%",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "400",
    textAlign: "center",
    letterSpacing: "-0.72px",
  },
  LoremIpsumDolorSitAm: {
    position: "absolute",
    top: "141.67%",
    bottom: "-180.56%",
    left: "4.88%",
    right: "4.88%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(0,0,0,0.8)",
    fontSize: "36px",
    lineHeight: "139%",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "400",
    textAlign: "center",
    letterSpacing: "-0.54px",
  },
  Group: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 63,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.5)",
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  SignUpForAFreeAccoun: {
    color: "rgba(0,0,0,1)",
    fontSize: "24px",
    lineHeight: "150%",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "700",
    letterSpacing: "-0.36px",
  },
  Group189: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    boxSizing: "border-box",
  },
  Group8106: {
    width: 237,
    height: "100%",
    paddingLeft: 12,
    paddingRight: 143,
    paddingTop: 6,
    paddingBottom: 6,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.5)",
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  FirstName: {
    color: "rgba(0,0,0,0.8)",
    fontSize: "15px",
    lineHeight: "160%",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "400",
    letterSpacing: "-0.22px",
  },
  Group341: {
    width: 237,
    height: "100%",
    paddingLeft: 12,
    paddingRight: 144,
    paddingTop: 6,
    paddingBottom: 30,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.5)",
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  LastName: {
    color: "rgba(0,0,0,0.8)",
    fontSize: "15px",
    lineHeight: "160%",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "400",
    letterSpacing: "-0.22px",
  },
  Group6910: {
    width: "100%",
    height: 40,
    paddingLeft: 12,
    paddingRight: 375,
    paddingTop: 6,
    paddingBottom: 6,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.5)",
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  EmailAddress: {
    color: "rgba(0,0,0,0.8)",
    fontSize: "15px",
    lineHeight: "160%",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "400",
    letterSpacing: "-0.22px",
  },
  Group608: {
    width: "100%",
    height: 40,
    paddingLeft: 12,
    paddingRight: 356,
    paddingTop: 6,
    paddingBottom: 6,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.5)",
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  CreatePassword: {
    color: "rgba(0,0,0,0.8)",
    fontSize: "15px",
    lineHeight: "160%",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "400",
    letterSpacing: "-0.22px",
  },
  Button: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
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
  SignupB: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingLeft: 80,
    paddingRight: 253,
    paddingTop: 120,
    paddingBottom: 120,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  LoremIpsumDolorSitAm1: {
    color: "rgba(0,0,0,0.8)",
    fontSize: "36px",
    lineHeight: "139%",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "400",
    letterSpacing: "-0.54px",
  },
  Button1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
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
  SignupC: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    paddingLeft: 80,
    paddingRight: 144,
    paddingTop: 120,
    paddingBottom: 120,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  LoremIpsumDolorSitAm2: {
    color: "rgba(0,0,0,0.8)",
    fontSize: "36px",
    lineHeight: "139%",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "400",
    letterSpacing: "-0.54px",
  },
  Button2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    paddingLeft: 50,
    paddingRight: 51,
    paddingTop: 17,
    paddingBottom: 18,
    borderRadius: 6,
    boxSizing: "border-box",
    backgroundColor: "rgba(24,160,251,1)",
  },
  JoinToday1: {
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
  Button3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: "100%",
    paddingLeft: 48,
    paddingRight: 49,
    paddingTop: 15,
    paddingBottom: 16,
    borderWidth: 1,
    borderColor: "rgba(24,160,251,1)",
    borderRadius: 6,
    boxSizing: "border-box",
    backgroundColor: "rgba(255,255,255,1)",
  },
  ContactUs: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    color: "rgba(24,160,251,1)",
    fontSize: "17px",
    lineHeight: "17px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: "-0.26px",
  },
})
