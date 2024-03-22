import {StyleSheet} from 'react-native';
import {height} from 'react-native-dimension';
import normalize from 'react-native-normalize';
import {heightPercentageToDP} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mainViewContainer: {
    flexGrow: 1,
    // flexBasis:1
    // height: '100%'
  },
  contentContainer: {
    // flex:1,
    marginHorizontal: 10,
    paddingBottom: normalize(100),
    // margin:10
  },
});
export default styles;
