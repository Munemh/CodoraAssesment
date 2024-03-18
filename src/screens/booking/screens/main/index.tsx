import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { BackgroundWrapper, Wrapper, ComponentWrapper, ScrollWrapper } from '@/common/components/Wrappers';
import { ScreenWrapper } from '@/common/components/ScreenWrapper';
import { Button, HeaderWithTitle, TextInput, TouchableOpacity, useColors } from '@/common';
import { AppHeader } from '@/common/components/AllHeaders';
import { height, totalSize, width } from '@/common/helpers';
import { DropdownPicker } from '@/common/components/dropdownPicker';
import C_TextInput from '@/common/components/C_TextInput';
import { CalenderComponent } from '@/common/components/Calender';

export const Booking = ({ navigation }) => {

  const { goBack, navigate } = navigation;
  const isFocused = useIsFocused();
  const animationValue = new Animated.Value(0);
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(1);
  const [status, setStatus] = useState(false);
  const Colors = useColors()

  const [isEmail, setIsEmail] = useState(false)
  const [Email, setEmail] = useState("")
  const emailRef = useRef(null);

  useEffect(() => {
    setStep(1);
    setProgress(1);

  }, [isFocused]);

  const animatedStyle = {
    transform: [
      {
        translateX: animationValue.interpolate({
          inputRange: [-1, 0, 1],
          outputRange: [-400, 0, 400],
        }),
      },
    ],
  };

  const RadioButton = ({ title, value, onPress }) => {
    return (
      <TouchableOpacity onPress={onPress} style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
      }}>
        <Text>{title}</Text>
        <View style={[
          {
            height: 20,
            width: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#007bff',
            alignItems: 'center',
            justifyContent: 'center',
          }, { backgroundColor: value ? '#007bff' : '#e0e0e0' }]} />
      </TouchableOpacity>
    );
  };
  const handleBack = () => {
    if (step == 1) {
      goBack();
      return;
    } else {
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        const handleDec = step == 4 || step == 5 ? progress - 0.5 : progress - 1;
        setProgress(progress - 1);
        setStatus(false);
        animationValue.setValue(0);
        if (step === 1) goBack();
        else setStep(Math.max(1, step - 1));
      });
    }
  };

  const handleForward = () => {
    if (step !== 7) {
      Animated.timing(animationValue, {
        toValue: -1,
        duration: 150,
        useNativeDriver: true,
      }).start(() => {
        // const handleIncreade = step == 3 || step == 4 ? progress + .5 : progress + 1
        setProgress(progress + 1);
        setStatus(true);
        animationValue.setValue(0);
        setStep(step + 1);
        return;
      });
    }
    if (step == 7) {

    }
  };

  return (
    <ScreenWrapper
      headerUnScrollable={() => <AppHeader
        withBorder
        onBackPress={handleBack}
        styleTitle={{ textAlign: 'center', width: width(80), }}
        title={"Friends & Family Booking"} />
      }
      containerViewStyle={{ paddingHorizontal: 20,  }}
      footerUnScrollable={() => <Button
        title={'Next'}
        textStyle={{
          color: Colors.white,
          fontSize: 17,
          lineHeight: 21,
          fontWeight: 'bold',
        }}
        containerStyle={{
          width: width(90),
          marginTop: 30,
          height: height(7),
          borderRadius: totalSize(0.7),
          marginBottom: 30,

        }}
        bgColor={Colors.buttonColor1}
        onPress={handleForward}
      />
      }

    >
      <Text style={{ color: 'rgba(27, 27, 27, 1)', fontSize: 22, lineHeight: 28, fontWeight: '400', marginTop: 30, marginLeft: 1 }}>
        Where
      </Text>
      {step == 1 && (
        <ComponentWrapper style={{ width: width(85), marginTop: height(5), alignSelf: 'center', display: 'flex', }}>

          <ComponentWrapper style={{
            width: width(85),
            borderColor: Colors.borderColor,
            borderWidth: .5,
            height: 54,
            display: 'flex',
            zIndex: 0,
            // height: isEmail ? 54 : 44,
            paddingHorizontal: width(3),
            // borderRadius: width(3.5),
            backgroundColor: Colors.background,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            paddingVertical: 5,
            // marginTop: height(2),
            shadowOpacity: 0.12,
            shadowRadius: 5.46,
            // elevation: 3,
            justifyContent: 'space-between',
            // paddingTop:10
          }}>

            <>
              {isEmail && <Text style={{ paddingTop: 5, paddingLeft: 5, color: Colors.lightBlack, height: 12, fontSize: 12, lineHeight: 10 }}>Email</Text>}
              <C_TextInput
                ref={emailRef}
                placeholder={'Email'}
                inputstyle={{ color: 'black', fontSize: isEmail ? 12 : 18 }}
                inputcontainerstyle={{ height: isEmail ? 35 : 40 }}
                onBlur={() => {
                  setIsEmail(false)
                  // setFieldTouched('password')
                }}
                onChangeText={setEmail}
                value={Email}
                onFocus={() => {
                  emailRef?.current?.focus()
                  setIsEmail(true)
                }}

              />
            </>
          </ComponentWrapper>

          <View style={{ marginTop: 30 }}>
          <ComponentWrapper style={{
            width: width(85),
            borderColor: Colors.borderColor,
            borderWidth: .5,
            height: 54,
            display: 'flex',
            zIndex: 0,
            // height: isEmail ? 54 : 44,
            paddingHorizontal: width(3),
            // borderRadius: width(3.5),
            backgroundColor: Colors.background,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            paddingVertical: 5,
            // marginTop: height(2),
            shadowOpacity: 0.12,
            shadowRadius: 5.46,
            // elevation: 3,
            justifyContent: 'space-between',
            // paddingTop:10
          }}>

            <>
              {isEmail && <Text style={{ paddingTop: 5, paddingLeft: 5, color: Colors.lightBlack, height: 12, fontSize: 12, lineHeight: 10 }}>Email</Text>}
              <C_TextInput
                ref={emailRef}
                placeholder={'Email'}
                inputstyle={{ color: 'black', fontSize: isEmail ? 12 : 18 }}
                inputcontainerstyle={{ height: isEmail ? 35 : 40 }}
                onBlur={() => {
                  setIsEmail(false)
                  // setFieldTouched('password')
                }}
                onChangeText={setEmail}
                value={Email}
                onFocus={() => {
                  emailRef?.current?.focus()
                  setIsEmail(true)
                }}

              />
            </>
          </ComponentWrapper>
          </View>

        </ComponentWrapper>
      )}
      {step == 2 && (
        <>
          <View style={{ marginTop: height(5), }}>
          <CalenderComponent/>
          </View>
        </>
      )}
      {step == 3 && (
        <View style={{ marginTop: height(5), }}>
          <Text style={{ color: 'rgba(27, 27, 27, 1)', fontSize: 16, lineHeight: 20, fontWeight: '400' }}>
            Are You currently a confirmed resident of Villa {'\n'}Vie?
          </Text>

        </View>
      )}
      {step == 4 && (
        <>
          <View style={{ marginTop: height(5), }}>
            <Text style={{ color: 'rgba(27, 27, 27, 1)', fontSize: 18, lineHeight: 28, fontWeight: '400' }}>
              Thats Great To hear!
            </Text>
           </View>
        </>
      )}

      {step == 5 && (
        <View style={{ marginTop: height(5),}}>
          <Text style={{ color: 'rgba(27, 27, 27, 1)', fontSize: 16, lineHeight: 20, fontWeight: '400' }}>
            Have you made a reservation with Villa Vie Residences?  </Text>
          <Text style={{ marginTop: 10, color: 'rgba(27, 27, 27, 1)', fontSize: 16, lineHeight: 20, fontWeight: '400' }}>
            Would you like to explore available segments or villa purchase options?   </Text>
        </View>
      )}
      {/* {step == 6 && (
        <Text onPress={handleForward}>6</Text>

      )}
      {step == 7 && (
        <Text onPress={handleForward}>7</Text>
      )} */}
      {/* </ScrollWrapper> */}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({});
