import React from 'react'
import { TextInput as RNTextInput } from 'react-native'
import { TextInputProps } from '@types'

export const TextInput = ({ value, onChangeText, maxLength,placeholder,returnKeyType, placeholderTextColor, editable, autoFocus, keyboardType, style, multiline, secureTextEntry, onEndEditing, onSubmitEditing ,onFocus,
    onBlur}: TextInputProps) => {
    return (
        <RNTextInput
            onEndEditing={onEndEditing}
            style={style}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            autoFocus={autoFocus}
            secureTextEntry={secureTextEntry}
            onFocus={onFocus}
            onBlur={onBlur}
            value={value}
            maxLength={maxLength}
            multiline={multiline}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            editable={editable}
            keyboardType={keyboardType}
        />
    )
}
