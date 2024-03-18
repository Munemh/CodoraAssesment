import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface MySubmitButtonProps {
  onPress?: () => void;
  title ?: string;
  buttonStyle ?: {};
}

const MySubmitButton: React.FC<MySubmitButtonProps> = ({
  onPress,
  title = 'Submit',
  buttonStyle = {},
}) => {
  return (
    <TouchableOpacity style={{...styles.button,... buttonStyle}} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MySubmitButton;
