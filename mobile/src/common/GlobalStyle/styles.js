import { StyleSheet } from 'react-native';
import { height, width } from 'react-native-dimension';
import { font } from './font';
import  normalize  from 'react-native-normalize';

export const globalStyles = StyleSheet.create({
    sectionContainer: {
        width: width(90),
        height: height(100),
        backgroundColor: 'white',
        marginTop: 18,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        paddingHorizontal: 20,
        paddingVertical: height(3),
        flex: 1,
        alignSelf: 'center',
    },
    title: {
        fontSize: 22,
        fontFamily: font.one.Medium,
        lineHeight: 21,
        color: '#3F7776',
    },
    description: {
        fontSize: 15,
        lineHeight: 20,
        fontFamily: font.one.Medium,
        fontWeight: '500',
        color: '#000000',
        paddingVertical: 10,
    },
    mt12: {
        marginTop: 12
    },
    dropdown: {
        // marginBottom:height(1.4),
        width: '100%',
        // paddingHorizontal:width(2.6),
        height: height(5),
    },
})