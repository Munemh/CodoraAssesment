import React, { useState } from 'react'
import { useTheme } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
// import { Down, } from '@assets';
import { height, width } from '@/common/helpers';
import { ComponentWrapper, Wrapper } from '../Wrappers';
import { Text, useColors } from '@/common';
import { Spacer } from '../spacer';
import { fontFamily, fontSize } from '@/common/helpers/fonts';
import { sizes } from '@/common/GlobalStyle/sizes';

export interface DropDownPickerTypes {
    width?: string | number
    setValue?: any
    value?: any
    placeholder?: string
    type?: any
    dropDownDirection?: 'BOTTOM' | 'TOP'
    zIndex?: number
    title?: string,
    heightOf?: any
    error?: string
    errorStyle?: any
}
export const DropdownPicker = ({ title, placeholder, width, heightOf, setValue, value, type, zIndex, dropDownDirection, error, errorStyle }: DropDownPickerTypes) => {
    const  colors : any = useColors()
    const [open, setOpen] = useState(false);
   const data ={
    user: [
        { value: 'Owner', label: 'Owner' },
        { value: 'Voyager', label: 'Voyager' },
       
      ]}
    
    const SelectedData = () => {
        const types = {
            'User': data.user
            
        }
        return types[type] || []
    }
    console.log(open,SelectedData());
    
    const [items, setItems] = useState(SelectedData());
    return (
        <Wrapper>
            {title && <Wrapper>
                <Text style={{
                    fontFamily: fontFamily.RalewayBold,
                    fontSize: fontFamily.medium,
                    colors: colors.textColor1,
                    marginVertical: 6
                }}>
                    {title}
                </Text>
                <Spacer isSmall />
            </Wrapper>}
            <DropDownPicker
                placeholder={placeholder ?? "Select an item"}
                open={open}
                maxHeight={200}
                zIndex={zIndex}
                value={value}
                // scrollViewProps={{
                //     showsVerticalScrollIndicator: false,
                //     nestedScrollEnabled: true,
                //     contentContainerStyle: { paddingBottom: 20 },
                // }}
                items={items}
                dropDownDirection={dropDownDirection ?? 'BOTTOM'}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                // ArrowDownIconComponent={() => (<Down width={12} color={colors.textColor2} />)}
                // ArrowUpIconComponent={() => <></>}
                TickIconComponent={() => <></>}
                placeholderStyle={{
                    color: colors.textColor2,
                    fontFamily: fontFamily.LatoRegular,
                    fontSize: fontSize.medium
                }}
                listParentLabelStyle={{ fontSize: fontSize.medium }}
                containerStyle={{ width: width ?? '100%', height: heightOf ?? height(6),zIndex:99,display:'flex' }}
                dropDownContainerStyle={{
                    backgroundColor: 'white',
                    borderWidth: 1,
                    borderColor: colors.borderColor1,
                    width: width ?? '100%',
                    zIndex: 1000,
                }}
                style={{
                    backgroundColor: colors.backgroudColor1,
                    borderColor: colors.borderColor,
                    borderRadius:0,
                    // zIndex:999,
                    width: width ?? '100%',
                    height: heightOf ?? height(6)
                }}

                labelStyle={{
                    fontFamily: fontFamily.RalewayMedium,
                    color: colors.black,
                }}
                listItemLabelStyle={{ color: colors.textColor2 }}
                

            />
            {
                error ?
                    <ComponentWrapper style={errorStyle} >
                        <Spacer height={sizes.TinyMargin} />
                        <Text style={{ color: colors.error }}>{error}</Text>
                    </ComponentWrapper>
                    :
                    null
            }
        </Wrapper>

    )
}
