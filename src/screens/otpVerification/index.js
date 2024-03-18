import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import React, { useState } from 'react'
// import { Password } from '@assets'
// import { Button, Text } from '@core-ui'
import { style } from './styles'
// import { useAppTheme } from '@context'
import { BackgroundWrapper, ScrollWrapper, Wrapper } from '@/common/components/Wrappers'
import { OtpInput } from '@/common/components/OtpInput'
import { useColors } from '@/common/GlobalStyle'
import { PassVerifyIcon } from '@/common/assets'
import { height, totalSize, width } from '@/common/helpers'
import { Button } from '@/common/components/Button'

export const OtpVerification = ({ navigation, route }) => {

    const Colors = useColors()
    const { styles } = style(false, Colors)
    const [value, setValue] = useState('');
    const [valueError, setValueError] = useState('');


    // const HandleContinue = () => {
    //     console.log('first', isReset)
    //     if (isReset) {
    //         // navigate(SCREEN.RESETSUCCESS)
    //         ConfirmReset(email, value, password)
    //     }
    //     else {
    //         // ConfirmSignUp({ email, value })
    //         ConfirmSignUp(email, value, input, userId, password)
    //         // navigate(SCREEN.PASSWORD)
    //     }
    // }

    return (
        <ScrollWrapper style={{
            backgroundColor: Colors.backgroundLight2,

            height: height(100),
        }}>
            <Wrapper style={[styles.wrapper, { ... { marginTop: height(10) } }]}>
                <PassVerifyIcon />
                <View style={{ marginTop: height(10), width: '100%' }}>
                    <Text style={{ color: Colors.text, fontSize: 26, lineHeight: 28, fontWeight: '600' }}>
                        Verification
                    </Text>
                </View>
                <Text style={styles.title}>Enter the code sent to <Text style={{ fontSize: 14, color: Colors.lightGreenNew }}>johndoe786@gmail.com</Text> </Text>
                <OtpInput
                    value={value}
                    setValue={setValue}
                    onChangeText={(val) => { setValue(val), setValueError('') }}
                    cellCount={5} />
                <View style={{ marginTop: height(5), flexDirection: 'row',width:'100%' }}>
                    <Text style={{ color: Colors.text, fontSize: 16, lineHeight: 20, fontWeight: '600' }}>
                        Don’t receive an SMS? <Text style={{ color: Colors.lightText, fontSize: 16, lineHeight: 20, fontWeight: '400' }}>
                            RESEND SMS</Text></Text>

                </View>
                <Button
                    title={'Continue'}
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
                    onPress={() => console.log("pressed")}
                />

            </Wrapper>

        </ScrollWrapper>
    )
}

export default OtpVerification

const styles = StyleSheet.create({})