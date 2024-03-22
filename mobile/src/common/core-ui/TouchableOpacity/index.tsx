import { TouchableOpacity as RNTouchableOpacity } from 'react-native'
import React from 'react'
import { touchableTypes } from '@types'

export const TouchableOpacity = ({ onPress, children, disabled, style, childkey }: touchableTypes) => {
    return (
        <RNTouchableOpacity
            key={childkey}
            style={style}
            onPress={onPress}
            disabled={disabled}
            activeOpacity={.9}>
            {children}
        </RNTouchableOpacity>
    )
}
