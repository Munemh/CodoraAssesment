import React, {useImperativeHandle, useRef, useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import {height} from 'react-native-dimension';
import styles from './style';
import { useColors } from '@/common/GlobalStyle';
// import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';



export const TextInputComponent = React.forwardRef(
  (
    {
      value = '',
      placeholder = '',
      required = null,
      keyboardType = 'default',
      maxLength = null,
      multiline = false,
      numberOfLines = null,
      editable = true,
      onFocus = () => {},
      onBlur = () => {},
      secureTextEntry = false,
      onChangeText = undefined,
      autoCapitalise = 'none',
      continerStyle = {},
      returnKeyType = 'next',
      onSubmitEditing = () => {},
      dispplaySuffix = false,
      onPressSuffix = () => {},
      onPress = () => {},
      errMessage = '',
      marginTop = 0,
      error = false,
      dispplayRightIcon = false,
      onEndEditing = () => {},
      marginRightIcon = 0,
    },
    ref,
  ) => {
    const inputRef = useRef(null);
    const color = useColors();
    const refStyle = styles(color);
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
      blur: () => {
        inputRef.current.blur();
      },
    }));
    return (
      <View>
        <TouchableOpacity
          style={[
            refStyle.mainWrapper,
            continerStyle,
            {marginTop: marginTop},
            error && {borderColor: color.red},
          ]}
          activeOpacity={1}
          onPress={() => {
            inputRef.current.focus(), onPress();
          }}>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // adjust the offset if needed
          >
            <TextInput
              editable={editable}
              ref={inputRef}
              placeholder={placeholder}
              placeholderTextColor={color.borderColor}
              style={[
                refStyle.container,
                {minHeight: 40},
                multiline && {
                  textAlignVertical: 'top',
                },
              ]}
              onPressIn={onPress}
              keyboardType={keyboardType}
              onFocus={() => onFocus()}
              secureTextEntry={secureTextEntry}
              onBlur={() => onBlur()}
              onEndEditing={onEndEditing}
              multiline={multiline}
              numberOfLines={numberOfLines}
              maxLength={maxLength}
              autoCapitalize={autoCapitalise}
              scrollEnabled={false}
              value={value}
              onChangeText={val => {
                if (onChangeText) onChangeText(val);
              }}
              returnKeyType={returnKeyType}
              onSubmitEditing={onSubmitEditing}
            />
          </KeyboardAvoidingView>
          {dispplaySuffix && (
            <TouchableOpacity
              activeOpacity={1}
              style={refStyle.leftContainer}
              onPress={onPressSuffix}>
              <Text style={refStyle.suffixText}>
                {secureTextEntry ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
          )}
          {dispplayRightIcon && (
            <View style={{marginRight: marginRightIcon}}>
              <RightArrow width={'12'} height={'17'} />
            </View>
          )}
        </TouchableOpacity>
        {errMessage !== '' && (
          <View style={refStyle.errorMessageContainer}>
            <Text
              style={[
                refStyle.errorMessage,
                errMessage === '' && {color: color.background},
              ]}>
              {errMessage === '' ? '' : errMessage}
            </Text>
          </View>
        )}
      </View>
    );
  },
);
export const TextInputComponentWithLabel = React.forwardRef(
  (
    {
      value = '',
      placeholder = '',
      required = null,
      keyboardType = 'default',
      maxLength = null,
      multiline = false,
      numberOfLines = null,
      editable = true,
      onFocus = () => {},
      onBlur = () => {},
      secureTextEntry = false,
      onChangeText = undefined,
      continerStyle = {},
      returnKeyType = 'next',
      onSubmitEditing = () => {},
      dispplaySuffix = false,
      onPressSuffix = () => {},
      onPress = () => {},
      errMessage = '',
      suffixText = 'Show',
      displayText = false,
      marginTop = 0,
      label = '',
      higlightBorder = true,
      displayPlaceHolder = true,
      error = false,
    },
    ref,
  ) => {
    const inputRef = useRef(null);
    const color = useColors();
    const refStyle = styles(color);
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
      blur: () => {
        inputRef.current.blur();
      },
    }));
    return (
      <View style={[refStyle.topContainer, {marginTop: marginTop}]}>
        {placeholder != '' && (
          <Text style={refStyle.label}>
            {displayPlaceHolder ? placeholder : label}
          </Text>
        )}
        <TouchableOpacity
          style={[
            refStyle.mainWrapper,
            continerStyle,
            {
              borderColor: higlightBorder
                ? !editable
                  ? color.borderColor
                  : error
                  ? color.red
                  : color.background3
                : color.borderColor,
              borderWidth: !editable ? 2.5 : 1.5,
            },
          ]}
          activeOpacity={1}
          onPress={() => {
            inputRef.current.focus(), onPress();
          }}>
          <TextInput
            editable={editable}
            ref={inputRef}
            placeholder={placeholder}
            placeholderTextColor={color.borderColor}
            style={[
              refStyle.container,
              multiline && {
                textAlignVertical: 'top',
                minHeight: height(10),
                maxHeight: height(14),
              },
            ]}
            onPressIn={onPress}
            keyboardType={keyboardType}
            onFocus={() => onFocus()}
            secureTextEntry={secureTextEntry}
            onBlur={() => onBlur()}
            multiline={multiline}
            numberOfLines={numberOfLines}
            maxLength={maxLength}
            value={value}
            onChangeText={val => {
              // setLocalValue(val);
              if (onChangeText) onChangeText(val);
            }}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
          />
          {dispplaySuffix && (
            <TouchableOpacity
              activeOpacity={1}
              style={refStyle.leftContainer}
              onPress={onPressSuffix}>
              <Text style={refStyle.suffixText}>
                {secureTextEntry ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
        <Text
          style={[
            refStyle.errorMessage,
            errMessage === '' && {color: color.background},
          ]}>
          {errMessage === '' ? '' : errMessage}
        </Text>
      </View>
    );
  },
);
