import React from 'react'
import { useTheme } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import { Text, TouchableOpacity } from '@/common';
import { useStyles } from './styles';
import { width } from '@/common/helpers';


export const CalenderComponent = ({ setSelected, selected }) => {
  const { colors }: any = useTheme()
  const { styles } = useStyles()

  const CustomDay = ({ date }: any) => {
    return (
      <TouchableOpacity onPress={() => setSelected(date)}
        style={{
          flex: 1,
          borderColor: colors.backgroundColor14,
          borderWidth: 1,
          borderRadius: 10,
          width: width(10.5),
          paddingVertical: width(3),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: selected?.dateString == date?.dateString ? colors.backgroundColor13 : colors.backgroudColor1
        }}
      >
        <Text style={{ color: selected?.dateString == date?.dateString ? 'white' : colors.backgroundColor14 }}>{date.day}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Calendar
      onDayPress={day => {setSelected(day.dateString) }}
      style={styles.calenderStyle}
      theme={styles.theme}
      dayComponent={(CustomDay)}
      hideExtraDays={true}
      enableSwipeMonths={true}
    />
  )
}