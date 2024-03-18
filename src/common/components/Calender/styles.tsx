import { StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native';

import { useColors } from '@/common';
import { width } from '@/common/helpers';

export const useStyles = () => {
    const colors : any = useColors()
    const styles = StyleSheet.create({
        calenderStyle: {
            marginHorizontal: width(5)
        },
        theme: {
            backgroundColor: colors.white,
            calendarBackground: colors.white,
            arrowColor: colors.backgroundColor12,
            selectedDayBackgroundColor: '#00adf5',
            todayTextColor: 'white',
            dayTextColor: colors.white,
        }
    })
    return { styles }
}