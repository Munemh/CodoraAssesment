import { Text as RNText } from "react-native";
import { styles } from "./styles";
import { TextTypes } from "@types";
import { useTheme } from "@react-navigation/native";


export const LargeText = ({ style, onPress, children, color }: TextTypes) => {
    const { colors }: any = useTheme()
    return (
        <RNText
            style={[styles.textLarge, { color: color ?? colors.textColor1 }, style]}
            onPress={onPress}
        >
            {children}
        </RNText>
    );
}
export const MediumText = ({ style, onPress, children, color, uppercase }: TextTypes) => {
    const { colors }: any = useTheme()
    return (
        <RNText
            style={[styles.textMedium, { textTransform: uppercase ? 'uppercase' : 'none', color: color ?? colors.textColor1 }, style]}
            onPress={onPress}
        >
            {children}
        </RNText>
    );
}
export const RegularText = ({ style, onPress, children, color, numberOfLines }: TextTypes) => {
    const { colors }: any = useTheme()
    return (
        <RNText
            style={[styles.textRegular, { color: color ?? colors.textColor1 }, style]}
            onPress={onPress}
            numberOfLines={numberOfLines}
        >
            {children}
        </RNText>
    );
}
export const SmallText = ({ style, onPress, children, color }: TextTypes) => {
    const { colors }: any = useTheme()
    return (
        <RNText
            style={[styles.textSmall, { color: color ?? colors.textColor1 }, style]}
            onPress={onPress}
        >
            {children}
        </RNText>
    );
}
export const TinyText = ({ style, onPress, children }: TextTypes) => {
    return (
        <RNText
            style={[styles.textTiny, style]}
            onPress={onPress}
        >
            {children}
        </RNText>
    );
}
export const LargeTitle = ({ style, onPress, children, color }: TextTypes) => {
    const { colors }: any = useTheme()
    return (
        <RNText
            style={[styles.largeTitleStyle, { color: color ?? colors.textColor1 }, style]}
            onPress={onPress}
        >
            {children}
        </RNText>
    );
}
export const MediumTitle = ({ style, onPress, children, color }: TextTypes) => {
    const { colors }: any = useTheme()
    return (
        <RNText
            style={[styles.mediumTitleStyle, { color: color ?? colors.textColor1 }, style]}
            onPress={onPress}
        >
            {children}
        </RNText>
    );
}
export const SmallTitle = ({ style, onPress, children, color }: TextTypes) => {
    const { colors }: any = useTheme()
    return (
        <RNText
            style={[styles.smallTitleStyle, { color: color ?? colors.textColor1 }, style]}
            onPress={onPress}
        >
            {children}
        </RNText>
    );
}
export const TinyTitle = ({ style, onPress, children, color ,numberOfLines=1}: TextTypes) => {
    const { colors }: any = useTheme()
    return (
        <RNText
            style={[styles.tinyTitleStyle, { color: color ?? colors.textColor1 }, style]}
            onPress={onPress}
            numberOfLines={numberOfLines}
        >
            {children}
        </RNText>
    );
}
export const Text = ({ style, onPress, children, color, textDecorationLine, textDecorationColor,numberOfLines }: TextTypes) => {
    const { colors }: any = useTheme()
    return (
        <RNText
            style={[{ color: color ?? colors.textColor1 }, style, textDecorationLine, textDecorationColor]}
            onPress={onPress}
            numberOfLines={numberOfLines}
        >
            {children}
        </RNText>
    );
}