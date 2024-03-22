import normalize from 'react-native-normalize';


import { Dimensions, Platform, StatusBar } from 'react-native'


export const normalizeSizes = {
  icons: {
    iconSizeSmaller: normalize(20),
    iconSizeSmall: normalize(25),
    iconSize: normalize(30),
    iconSizeMedium: normalize(35),
    iconSizeBig: normalize(40),
    iconSizeBigger: normalize(45),
  },

  radius: {
    radius2: normalize(2),
    radius4: normalize(4),
    radius5: normalize(5),
    radius10: normalize(10),
    radius15: normalize(15),
    radius20: normalize(20),
    radius30: normalize(30),
    radius40: normalize(40),
    radius50: normalize(50),
    radius100: normalize(100),
  },

  widths: {
    width1: normalize(1),
    width2: normalize(2),
    width3: normalize(3),
    width4: normalize(4),
    width5: normalize(5),
    width8: normalize(8),
    width9: normalize(9),
    width10: normalize(10),
    width11: normalize(11),
    width13: normalize(13),
    width15: normalize(15),
    width16: normalize(16),
    width18: normalize(18),
    width20: normalize(20),
    width23: normalize(23),
    width24: normalize(24),
    width25: normalize(25),
    width30: normalize(30),
    width33: normalize(33),
    width35: normalize(35),
    width32: normalize(32),
    width40: normalize(40),
    width45: normalize(45),
    width55: normalize(55),
    width70: normalize(70),
    width100: normalize(100),
    width130: normalize(130),
    width140: normalize(140),
    width155: normalize(155),
    width160: normalize(160),
    width175: normalize(175),
    width180: normalize(180),
    width220: normalize(220),
    width226: normalize(226),
    width250: normalize(250),
    width260: normalize(260),
    width310: normalize(310),
    width320: normalize(320),
    width330: normalize(330),
    width340: normalize(340)
  },

  heights: {
    height1: normalize(1),
    height2: normalize(2),
    height3: normalize(3),
    height8: normalize(8),
    height9: normalize(9),
    height10: normalize(10),
    height12: normalize(12),
    height13: normalize(13),
    height11: normalize(11),
    height15: normalize(15),
    height16: normalize(16),
    height18: normalize(18),
    height20: normalize(20),
    height24: normalize(24),
    height25: normalize(25),
    height26: normalize(26),
    height30: normalize(30),
    height32: normalize(32),
    height34: normalize(34),
    height35: normalize(35),
    height36: normalize(36),
    height40: normalize(40),
    height45: normalize(45),
    height55: normalize(55),
    height65: normalize(65),
    height70: normalize(70),
    height80: normalize(80),
    height82: normalize(82),
    height100: normalize(100),
    height120: normalize(120),
    height130: normalize(130),
    height150: normalize(150),
    height145: normalize(145),
    height154: normalize(154),
    height165: normalize(165),
    height190: normalize(190),
    height200: normalize(200),
    height210: normalize(210),
    height205: normalize(205),
    height230: normalize(230),
    height260: normalize(260),
    height270: normalize(270),
    height390: normalize(390),
    height370: normalize(370),
    height355: normalize(355),
    height300: normalize(300),
    height420: normalize(420),
    height440: normalize(440),
    height460: normalize(460),
    height480: normalize(480),
    height500: normalize(500)
  },

  margins: {
    margin2: normalize(2),
    margin3: normalize(3),
    margin4: normalize(4),
    margin8: normalize(8),
    margin10: normalize(10),
    margin12: normalize(12),
    margin15: normalize(15),
    margin16: normalize(16),
    margin18: normalize(18),
    margin20: normalize(20),
    margin24: normalize(24),
    margin28: normalize(28),
    margin30: normalize(30),
    margin32: normalize(32),
    margin36: normalize(36),
    margin40: normalize(40),
    margin50: normalize(50),
    margin64: normalize(64),
    margin70: normalize(70),
    margin90: normalize(90),
    margin100: normalize(100),
    margin250: normalize(250)
  },

  paddings: {
    padding2: normalize(2),
    padding4: normalize(4),
    padding6: normalize(6),
    padding8: normalize(8),
    padding12: normalize(12),
    padding13: normalize(13),
    padding16: normalize(16),
    padding17: normalize(17),
    padding20: normalize(20),
    padding24: normalize(24),
    padding28: normalize(28),
    padding30: normalize(30),
    padding32: normalize(32),
    padding36: normalize(36),
    padding40: normalize(40),
    padding50: normalize(50),
    padding60: normalize(60),
    padding90: normalize(90),
    padding100: normalize(100),
    padding150: normalize(150),
  },

  top: {
    top10: normalize(10),
    top12: normalize(12),
    top15: normalize(15),
    top20: normalize(20),
    top30: normalize(30),
    top40: normalize(40),
  },

  bottom: {
    bottom10: normalize(10),
    bottom20: normalize(20),
    bottom30: normalize(50),
  },

  right: {
    right10: normalize(10),
    right15: normalize(15),
    right20: normalize(20),
  },

  typography: {
    h1: normalize(33),
    h2: normalize(29),
    h3: normalize(25),
    h4: normalize(21),
    h5: normalize(19),
    h6: normalize(17),
    h7: normalize(15),
    h8: normalize(13),
    normalized23: normalize(23),
  },
};




const handleSize = (num) => {
  if (num <= 0) return 0;
  if (num > 100) return 1;
  return num / 100;
};
const { width, height } = Dimensions.get('window')
export const totalSize = (num: number) => Math.sqrt((height * height) + (width * width)) * handleSize(num);


const statusBarHeight = Platform.select({
  ios: 22,
  android: StatusBar.currentHeight
})
const headerHeight = Platform.select({
  ios: height * 0.08,
  android: height * 0.1
})
const tabBarHeight = Platform.select({
  ios: height * 0.08,
  android: height * 0.08
})

// Used via Metrics.baseMargin
export const sizes = {
  marginBottom: height * 0.025,
  marginTop: height * 0.025,
  marginHorizontal: width * 0.05,
  marginVertical: height * 0.025,
  section: 25,
  TinyMargin: totalSize(0.5),
  smallMargin: totalSize(1),
  baseMargin: totalSize(2),
  doubleBaseMargin: totalSize(5),
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 10,
  buttonSmallRadius: 5,
  buttonMiniRadius: 7,
  modalRadius: 15,
  cardRadius: 15,
  ModalRadius: 25,
  inputRadius: 8,
  smallImageRadius: 10,
  statusBarHeight: statusBarHeight,
  headerHeight: headerHeight,
  tabBarHeight: tabBarHeight,
  cameraBgHeight: 80,
  cameraBgWeidth: 80,
  CamBgRadius: 40,
  icons: {
    tiny: totalSize(1.5),
    small: totalSize(2),
    medium: totalSize(2.5),
    large: totalSize(3),
    xl: totalSize(4),
    xxl: totalSize(5),
    xxxl: totalSize(6)
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}




