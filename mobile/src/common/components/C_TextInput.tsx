
import React, { forwardRef, useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import { PassVisible, PassHide } from '@/common/assets/Svg';

interface C_TextinputProps {
  inputstyle?: object;
  placeholder?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  onChangeText?: (text: string) => void;
  value?: string;
  secureTextEntry?: boolean;
  editable?: boolean;
  keyboardType?: string;
  inputcontainerstyle?:{}
}

const C_Textinput: React.ForwardRefRenderFunction<TextInput, C_TextinputProps> = (
  props,
  ref
) => {
  const textInputRef = useRef<TextInput>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(
    !props.secureTextEntry || false
  );

  React.useImperativeHandle(ref, () => ({
    focus: () => {
      textInputRef.current?.focus();
    },
    blur: () => {
      textInputRef.current?.blur();
    },
  }));

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevValue) => !prevValue);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={[styles.inputContainer, { ...props.inputcontainerstyle }]}>
        <TextInput
          ref={textInputRef}
          style={[styles.textinput,{...props.inputstyle}]}
          placeholder={props.placeholder}
          placeholderTextColor="black"
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          onSubmitEditing={props.onSubmitEditing}
          onChangeText={props.onChangeText}
          value={props.value}
          secureTextEntry={!isPasswordVisible}
          editable={props.editable}
          keyboardType={props.keyboardType}
        />
        {props.secureTextEntry && (
          <TouchableOpacity
            style={styles.showHideButton}
            onPress={togglePasswordVisibility}
          >
            {isPasswordVisible ? <PassVisible /> : <PassHide />}
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default forwardRef(C_Textinput);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textinput: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    // marginTop: '2%',
    // fontSize:10,
    color: 'black',
  },
  showHideButton: {
    padding: 10,
  },
});
