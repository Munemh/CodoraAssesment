import { useColors } from "@/common/GlobalStyle";
import { height, width } from "@/common/helpers";
import React from "react";
import { StyleSheet, Platform } from "react-native";
// import { useAppTheme } from "@context";
// import { height, width } from 'react-native-dimension'

const theme = false;
export const stylez = (COLOR) => {
    // const { theme } = useAppTheme()
    const styles = StyleSheet.create({
        mainContainer: {
            flex: 1,
        },
        fullScreenWrapper: {
            flex: 1,
        },
        backgroundWrapper: {
            flex: 1,
            height: height(100),
            width: width(100),

        },
        compContainer: {
            // marginHorizontal: width(8),
        },
        rowCompContainer: {
            // marginHorizontal: width(5),
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginVertical: height(2.5)
        },
        rowView: {
            flexDirection: 'row',
            alignItems: 'center',
        },

        linearCurveContainer: {
            flex: 1,
            backgroundColor: theme ? COLOR.backgroundColorPrimary : COLOR.white,
        },
        imageContainer: {
            width: "100%",
            height: height(26),
            backgroundColor: theme ? '#212739A6' : COLOR.backgroundLight5,
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
        },
        image: {
            width: "100%",
            height: "100%",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
        },
        semiCircle: {
            borderRadius: 100 / 2,
            overflow: "hidden",
            backgroundColor: theme ? COLOR.primary1000 : "rgba(114, 58, 222, 0.05)",
            width: 100,
            height: 100 / 2,
            position: "absolute",
            right: width(-20),
            bottom: width(20),
        }
    })
    return { styles }
}