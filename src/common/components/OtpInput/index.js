// Librarys section

import { useColors } from '@/common/GlobalStyle'
import { totalSize,width } from '@/common/helpers'
import { fontFamily } from '@/common/helpers/fonts'
import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'

// Custom Components section
// import { useAppTheme } from '@context'
// import { width, totalSize } from '@helpers'
// import { COLOR, fontFamily } from '@constants'


export const OtpInput = ({
    cellCount,
    value,
    onChangeText,
    setValue
}) => {

    // const { theme } = useAppTheme()
const theme = false;
const COLOR = useColors()
const style = styles(theme,COLOR);
    const CELL_COUNT = cellCount;
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
        <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={(val) => { onChangeText(val) }}
            cellCount={CELL_COUNT}
            rootStyle={style.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"

            renderCell={({ index, symbol, isFocused }) => (
                <Text
                    key={index}
                    style={[style.cell, isFocused && style.focusCell, style.codeText]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
            )}
        />
    )
}

const styles = (theme,COLOR) => StyleSheet.create({

    codeFieldRoot: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    focusCell: {
        borderColor: !theme ? COLOR.textDark2 : COLOR.textLight2,
    },
    codeText: {
        fontFamily: fontFamily.SemiBold,
        fontSize: totalSize(2),
        color: theme ? COLOR.darkMode : COLOR.lightMode,
        lineHeight: 45,
    },
    cell: {
        width: width(15),
        height: width(12.5),
        borderRadius: 12,
        borderWidth: 1,
        margin: 5,
        textAlign: 'center',
        borderColor: theme ? '#463E54' : '#DFDFDF',
        backgroundColor: theme ? COLOR.backgroundDark2 : '#fff'
    },

})