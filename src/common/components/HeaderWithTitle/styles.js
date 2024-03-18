import { StyleSheet } from 'react-native';
import { height, totalSize, width } from 'react-native-dimension';
import normalize from 'react-native-normalize';
export default styles = (color) => StyleSheet.create({
  container: {
    width: width(100),
    alignSelf: 'center',
    borderRadius: totalSize(1.5),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'black',
    fontSize: width(4.5),
  },
  logoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop:15,
    borderBottomWidth:height(0.1),
    height:height(8),
    justifyContent:'center',
    fontSize: 14
  }, dotIcon: {
    width: width(2.5),
    height: width(2.5),
    backgroundColor: 'red',
    borderRadius: width(2),
    position: 'absolute',
    top: height(0.2),
    right: -width(0.1),
    zIndex: 1000
  },
});
