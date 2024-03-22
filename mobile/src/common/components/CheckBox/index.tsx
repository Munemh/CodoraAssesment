// import React, { useState } from 'react'
// import { Wrapper } from '../Wrappers'
// import { Check, Checked } from '@/common'
// import { TouchableOpacity } from '@/common'
// import { useStyles } from './styles'

// interface props {
//     color?: string
//     size?: number
//     rounded?: boolean
//     checked?: boolean
//     onPress?: () => void
// }

// export const CheckBoxSq = ({ size = 25, color = "#3EAA1E", rounded, checked, onPress }: props) => {
//     const { styles } = useStyles(size)
//     // const [checked, setChecked] = useState(false)
//     return (
//         <TouchableOpacity onPress={onPress}>
//             {checked && (rounded ?
//                 <Checked height={size} width={size} color={color} /> :
//                 <Check height={size} width={size} color={color} />)}
//             {!checked && <Wrapper style={rounded ? styles.uncheckedRounded : styles.unchecked} />}
//         </TouchableOpacity>

//     )
// }
// export const CheckedBox = ({ size = 25, color = "#3EAA1E", rounded, onPress }: props) => {
//     const { styles } = useStyles(size)
//     const [checked, setChecked] = useState(false)
//     return (
//         <TouchableOpacity onPress={() => setChecked(!checked)}>
//             {checked && (rounded ?
//                 <Checked height={size} width={size} color={color} /> :
//                 <Check height={size} width={size} color={color} />)}
//             {!checked && <Wrapper style={rounded ? styles.uncheckedRounded : styles.unchecked} />}
//         </TouchableOpacity>

//     )
// }
