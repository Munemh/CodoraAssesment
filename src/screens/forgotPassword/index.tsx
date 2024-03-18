import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
// import { Password } from '@assets'
// import { Button, Text } from '@core-ui'
import { style } from './styles'
// import { useAppTheme } from '@context'
import { BackgroundWrapper, ComponentWrapper, ScrollWrapper, Wrapper } from '@/common/components/Wrappers'
import { OtpInput } from '@/common/components/OtpInput'
import { useColors } from '@/common/GlobalStyle'
import { PassResetIcon } from '@/common/assets'
import { height, totalSize, width } from '@/common/helpers'
import { Button } from '@/common/components/Button'
import C_TextInput from '@/common/components/C_TextInput'
import { SCREEN } from '@/routes'

export const ForgotPassword = ({ navigation, route }) => {

    const Colors = useColors()
    const { styles } = style(false, Colors)

    const [isEmail, setIsEmail] = useState(false)
    const [Email, setEmail] = useState("")
    const emailRef = useRef(null);

    return (
        <ScrollWrapper style={{
            backgroundColor: Colors.backgroundLight2,

            height: height(100),
        }}>
            <Wrapper style={[styles.wrapper, { ... { marginTop: height(10) } }]}>
                <PassResetIcon />
                <View style={{ marginTop: height(10), width: '100%' }}>
                    <Text style={{ color: Colors.text, fontSize: 26, lineHeight: 28, fontWeight: '600' }}>
                        Fordot Password!
                    </Text>
                </View>
                <Text style={styles.title}>Enter the code sent to <Text style={{ fontSize: 14, color: Colors.lightGreenNew }}>johndoe786@gmail.com</Text> </Text>

                <ComponentWrapper style={{
                    width: width(90),
                    borderColor: Colors.borderColor,
                    borderWidth: .5,
                    height: 54,
                    // height: isEmail ? 54 : 44,
                    paddingHorizontal: width(3),
                    borderRadius: width(3.5),
                    backgroundColor: Colors.background,
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

                </ComponentWrapper>


                <Button
                    title={'Send'}
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
                    }}
                    bgColor={Colors.buttonColor1}
                    onPress={() => navigation.navigate(SCREEN.OTPVERIFICATION)}
                />

            </Wrapper>

        </ScrollWrapper>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({})