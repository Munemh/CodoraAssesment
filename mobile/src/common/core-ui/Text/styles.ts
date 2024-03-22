import { fontFamily, fontSize } from '@/common/helpers/fonts'
import { StyleSheet, } from 'react-native'
fontFamily

export const styles = StyleSheet.create({
    textLarge: {
        fontSize: fontSize.large,
        fontFamily: fontFamily.LatoRegular
    },
    textMedium: {
        fontSize: fontSize.medium,
        fontFamily: fontFamily.LatoRegular,
    },
    textRegular: {
        fontSize: fontSize.regular,
        // fontFamily: fontFamily.appTextRegular
    },
    textSmall: {
        fontSize: fontSize.small,
        // fontFamily: fontFamily.appTextRegular
    },
    textTiny: {
        fontSize: fontSize.tiny,
        // fontFamily: fontFamily.RalewayBold
    },
    largeTitleStyle: {
        fontSize: fontSize.h3,
        fontFamily: fontFamily.RalewayBold
    },
    mediumTitleStyle: {
        fontSize: fontSize.h4,
        fontFamily: fontFamily.RalewayBold
    },
    smallTitleStyle: {
        fontSize: fontSize.h5A,
        fontFamily: fontFamily.RalewayBold,
        justifyContent:'center',
        // textAlignVertical: 'top'
    },
    tinyTitleStyle: {
        fontSize: fontSize.h6,
        fontFamily: fontFamily.RalewayMedium,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    spaceBetween: {
        justifyContent: 'space-between'
    },
})