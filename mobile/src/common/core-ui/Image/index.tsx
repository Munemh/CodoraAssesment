// import { Image as RNImage } from "react-native"
// import { height, totalSize, width } from '@helpers'
// import { ImageProps, OnBoardingImageProps } from "@types"

// export const OnBoardingImage = ({ source, styles = {} }: OnBoardingImageProps) => {
//     return (
//         <RNImage source={source}
//             style={[{ height: height(80), width: width(100) }, styles]} />
//     )
// }
// export const Image = ({ src, resizeMode, style, height, width, borderRadius }: ImageProps) => {
//     const defaultSize = totalSize(20)
    
//     return (
//         <RNImage source={src} resizeMode={resizeMode}
//             style={[{ height: height ?? defaultSize, width: width ?? defaultSize, borderRadius: borderRadius }, style]} />
//     )
// }