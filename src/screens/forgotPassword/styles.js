import { StyleSheet } from "react-native"

// import { COLOR, fontFamily, fontSize } from "@constants"
import { width,height } from "@/common/helpers"
import { fontFamily, fontSize } from "@/common/helpers/fonts"
// import Colors as COLOR from "@/main/color"

export const style = (theme,COLOR) => {
    // const { theme } = useAppTheme()
    const styles = StyleSheet.create({
        icon: {
            backgroundColor:  COLOR.backgroundLight2,
            alignItems: 'center', alignSelf: 'center',
            height: 100, width: 100,
            justifyContent: 'center',
            borderRadius: 100,
            marginVertical: 24
        },
        wrapper: {
            backgroundColor:  COLOR.backgroundLight2,
            borderRadius: 24,
            paddingHorizontal: width(4),
            paddingTop: width(4),
            height: height(78),
            paddingBottom: width(4),
            marginHorizontal: width(5),
            marginTop: height(1),
            marginBottom: height(3),
            alignContent:'center',
            alignItems:'center'
        },
        resend: {
            marginVertical: 8,
            alignSelf: 'flex-end'
        },
        title: {
            fontFamily: fontFamily.SemiBold,
            fontSize: 15,
            textAlign: 'center',
            marginBottom: height(5)
        },
        btn: {
            position: 'absolute', bottom: height(3),
            right: 16, left: 16,
        },
        footer: {
            textAlign: 'center',
            textDecorationLine: 'underline',
            fontFamily: fontFamily.SemiBold
        }
    })
    return { styles }
}