import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
  findNodeHandle,
  Platform,
} from 'react-native';
import React, { useContext, useRef, useState } from 'react';
import { AppleLogo, GoogleLogo, Logo, StartIcon1 as StartIcon, StartIconBackground } from '@/common/assets/Svg';
import { Formik } from 'formik';
import * as yup from 'yup';
import { totalSize } from 'react-native-dimension';
import normalize from 'react-native-normalize';
import { ScreenWrapper } from '@/common/components/ScreenWrapper';
import Colors from '@/main/color';
import C_Textinput from '@/common/components/C_TextInput';
import { ButtonWithLogo } from '@/common/components/ButtonWithLogo';
import { useColors } from '@/common/GlobalStyle';
import { Button } from '@/common/components/Button';
import { TextInputComponent } from '@/common/components/TextInput';
import { ComponentWrapper, RowWrapper, ScrollWrapper, Wrapper } from '@/common/components/Wrappers';
import { width, height } from '@/common/helpers';
import HorizontalLine from '@/common/components/LineView';
import { SCREEN } from '@/routes';
const SignUpValidationSchema = yup.object().shape({
  email: yup.string().required('Invalid Email entered'),
  password: yup.string().required('Invalid Password'),
});
const SignUp = props => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const scrollViewRef = useRef(null);
  const {navigation} = props;
  const color = useColors();
  const [isEmail, setIsEmail] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  return (
    <ScrollWrapper
      contentContainerStyle={{ marginHorizontal: 20 }}
    >
      <Formik
        initialValues={{
          password: '',
          email: '',
        }}
        onSubmit={values => {
          console.log(values);

        }}
        validationSchema={SignUpValidationSchema}>
        {({
          values,
          errors,
          touched,
          handleChange,
          isValid,
          setFieldValue,
          setFieldTouched,
          handleSubmit,
        }) => (
          <View style={styles.MainContainer}>
            <View style={{
              marginHorizontal: 20,
              marginVertical: 10,
              flexWrap: 'wrap',
              alignContent: 'center',
              marginTop: '20%'
            }}>
              <Logo />
            </View>
            <View style={{ marginTop: height(10) }}>
              <Text style={{ color: Colors.text, fontSize: 26, lineHeight: 28, fontWeight: '600' }}>
                Let's Get Started
              </Text>
            </View>

            <RowWrapper style={{flex: 1,}}>
              <Wrapper >
                <ComponentWrapper style={{
                  width: width(40),
                  borderColor: color.borderColor,
                  borderWidth: .5,
                  height: 54,
                  paddingHorizontal: width(3),
                  borderRadius: width(3.5),
                  backgroundColor: color.background,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  paddingVertical: 5,
                  marginTop: height(5),
                  shadowOpacity: 0.12,
                  shadowRadius: 5.46,
                  // elevation: 3,
                  justifyContent: 'space-between',
                  // paddingTop:10
                }}>


                  {isEmail && <Text style={{ paddingTop: 5, paddingLeft: 5, color: Colors.lightBlack, height: 12, fontSize: 12, lineHeight: 10 }}>Name*</Text>}
                  <C_Textinput
                    onChangeText={handleChange('email')}
                    ref={emailRef}
                    value={values.email}
                    onBlur={() => {
                      setIsEmail(false)
                      setFieldTouched('email')
                    }}
                    placeholder={'Name*'}
                    inputstyle={{ color: 'black', fontSize: 12 }}
                    inputcontainerstyle={{ height: 35 }}
                    // onSubmitEditing={() => focusTextInput(emailRef.current)}
                    onFocus={() => {
                      emailRef?.current?.focus()
                      setIsEmail(true)
                    }}
                  />

                </ComponentWrapper>
                {touched.email && errors.email && (
                  <Text style={{ color: 'red', fontSize: 12, marginTop: 5 }}>
                    {errors.email}
                  </Text>
                )}
              </Wrapper>
              <Wrapper >
                <ComponentWrapper style={{
                  width: width(40),
                  borderColor: color.borderColor,
                  borderWidth: .5,
                  height: 54,
                  paddingHorizontal: width(3),
                  borderRadius: width(3.5),
                  backgroundColor: color.background,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  paddingVertical: 5,
                  marginTop: height(5),
                  shadowOpacity: 0.12,
                  shadowRadius: 5.46,
                  // elevation: 3,
                  justifyContent: 'space-between',
                  // paddingTop:10
                }}>


                  {isEmail && <Text style={{ paddingTop: 5, paddingLeft: 5, color: Colors.lightBlack, height: 12, fontSize: 12, lineHeight: 10 }}>Last Name*</Text>}
                  <C_Textinput
                    onChangeText={handleChange('email')}
                    ref={emailRef}
                    value={values.email}
                    onBlur={() => {
                      setIsEmail(false)
                      setFieldTouched('email')
                    }}
                    placeholder={'Last Name*'}
                    inputstyle={{ color: 'black', fontSize: 12 }}
                    inputcontainerstyle={{ height: 35 }}
                    // onSubmitEditing={() => focusTextInput(emailRef.current)}
                    onFocus={() => {
                      emailRef?.current?.focus()
                      setIsEmail(true)
                    }}
                  />

                </ComponentWrapper>
                {touched.email && errors.email && (
                  <Text style={{ color: 'red', fontSize: 12, marginTop: 5 }}>
                    {errors.email}
                  </Text>
                )}
              </Wrapper>
            </RowWrapper>


            <ComponentWrapper style={{
              width: width(90),
              borderColor: color.borderColor,
              borderWidth: .5,
              height: 54,
              paddingHorizontal: width(3),
              borderRadius: width(3.5),
              backgroundColor: color.background,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              paddingVertical: 5,
              marginTop: height(2),
              shadowOpacity: 0.12,
              shadowRadius: 5.46,
              // elevation: 3,
              justifyContent: 'space-between',
              // paddingTop:10
            }}>


              {isPassword && <Text style={{ paddingTop: 5, paddingLeft: 5, color: Colors.lightBlack, height: 12, fontSize: 12, lineHeight: 10 }}>Password</Text>}
              <C_Textinput
                ref={passwordRef}
                secureTextEntry={true}
                placeholder={'Password'}
                inputstyle={{ color: 'black', fontSize: isPassword ? 12 : 18 }}
                inputcontainerstyle={{ height: isPassword ? 35 : 40 }}
                onBlur={() => {
                  setIsPassword(false)
                  setFieldTouched('password')
                }}
                onChangeText={handleChange('password')}
                value={values.password}
                onFocus={() => {
                  passwordRef?.current?.focus()
                  setIsPassword(true)
                }}

              />

            </ComponentWrapper>
            {touched.email && touched.password && errors.password && (
              <Text style={{ color: 'red', fontSize: 12, marginTop: 5 }}>
                {errors.password}
              </Text>
            )}
            <ComponentWrapper style={{
              width: width(90),
              borderColor: color.borderColor,
              borderWidth: .5,
              height: 54,
              paddingHorizontal: width(3),
              borderRadius: width(3.5),
              backgroundColor: color.background,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 4,
              },
              paddingVertical: 5,
              marginTop: height(2),
              shadowOpacity: 0.12,
              shadowRadius: 5.46,
              // elevation: 3,
              justifyContent: 'space-between',
              // paddingTop:10
            }}>


              {isPassword && <Text style={{ paddingTop: 5, paddingLeft: 5, color: Colors.lightBlack, height: 12, fontSize: 12, lineHeight: 10 }}>Confirm Password</Text>}
              <C_Textinput
                ref={passwordRef}
                secureTextEntry={true}
                placeholder={isPassword ? '' : 'Confirm Password'}
                inputstyle={{ color: 'black', fontSize: isPassword ? 12 : 18 }}
                inputcontainerstyle={{ height: isPassword ? 35 : 40 }}
                onBlur={() => {
                  setIsPassword(false)
                  setFieldTouched('password')
                }}
                onChangeText={handleChange('password')}
                value={values.password}
                onFocus={() => {
                  passwordRef?.current?.focus()
                  setIsPassword(true)
                }}

              />

            </ComponentWrapper>
            {touched.email && touched.password && errors.password && (
              <Text style={{ color: 'red', fontSize: 12, marginTop: 5 }}>
                {errors.password}
              </Text>
            )}
            <View >


              <Button
                title={'Sign Up'}
                textStyle={{
                  color: color.white,
                  fontSize: 17,
                  lineHeight: 21,
                  fontWeight: 'bold',
                }}
                containerStyle={{
                  width: width(90),
                  marginTop: 30,
                  height: height(7),
                  borderRadius: totalSize(0.7),
                  // borderWidth: 3,
                  // borderColor: color.subHeadingColor1
                }}
                bgColor={color.buttonColor1}
                onPress={() => console.log("pressed")}
              />

              <HorizontalLine
                text={"OR"}
              />

              <ButtonWithLogo
                logo={<GoogleLogo />}
                textStyle={{ alignSelf: 'center' }}
                title={'Sign in with Google'}
                containerStyle={{
                  width: width(90),
                  marginTop: normalize(30),
                  borderRadius: 5, paddingLeft: 5
                }}
                onPress={() => { console.log("signInwithGoogle") }}
              />
              <ButtonWithLogo
                logo={<AppleLogo />}
                textStyle={{ alignSelf: 'center' }}
                title={'Sign in with Apple ID'}
                containerStyle={{
                  width: width(90),
                  marginTop: normalize(30),
                  borderRadius: 5
                  , paddingLeft: 5,
                  marginBottom: 5

                }}
                onPress={() => { console.log("signInwithGoogle") }}
              />

            </View>

          </View>
        )}
      </Formik>


      <TouchableOpacity style={{ marginTop: height(5), alignItems: 'center', justifyContent: 'center' }}
      onPress={()=>navigation.navigate(SCREEN.LOGIN)}
      >
        <Text style={{ color: Colors.text, fontSize: 16, lineHeight: 20, fontWeight: '600' }}>
          Do have any account</Text>
        <Text style={{ color: Colors.secondary, fontSize: 16, lineHeight: 20, fontWeight: '600', borderBottomWidth: 1, borderColor: Colors.secondary }}>
          SIGN IN HERE</Text>
      </TouchableOpacity>

    </ScrollWrapper>


  );
};

export default SignUp;
const styles = StyleSheet.create({
  MainContainer: {
    // width: width,
    flex: 1,
    // backgroundColor: colors.darkblue,
  },

});
