import { sizes } from '@/common/GlobalStyle/sizes';
import React from 'react'
import { View, } from 'react-native'


interface SpacerTypes {
    horizontal?: boolean
    height?: number
    width?: number
    style?: any
    isBasic?: boolean
    isSmall?: boolean
    isTiny?: boolean
    isXTiny?: boolean
    isDoubleBase?: boolean
    isStatusBarHeigt?: boolean
    isHeaderHeight?: boolean
    isBottomTabBarHeight?: boolean
}

const TempSpacer = ({ style, width, height, }) => {
    return (
        <View style={[{ height: height, width: width }, style]} />
    );
}


export const Spacer = ({ horizontal, height, width, style, isBasic, isSmall, isTiny, isXTiny, isDoubleBase, isStatusBarHeigt, isHeaderHeight, isBottomTabBarHeight }: SpacerTypes) => {
    const tempSize = isXTiny ? sizes.TinyMargin / 2 :
        isTiny ? sizes.TinyMargin :
            isSmall ? sizes.smallMargin :
                isBasic ? sizes.baseMargin :
                    isDoubleBase ? sizes.doubleBaseMargin :
                        isStatusBarHeigt ? sizes.statusBarHeight :
                            isHeaderHeight ? sizes.headerHeight :
                                isBottomTabBarHeight ? sizes.tabBarHeight : sizes.baseMargin
    const defaultHeight = !horizontal ? height || tempSize : 0
    const defaultWidth = (horizontal || width) ? width || tempSize : 0
    return (
        <TempSpacer height={defaultHeight} width={defaultWidth} style={style} />
    );
}