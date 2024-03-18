import React from 'react';
import { ImageBackground, SafeAreaView as SafeArea, StatusBar, View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { stylez } from './styles';
import { Img as Images } from '@/common/assets';
import { useColors } from '@/common/GlobalStyle';
// import { useAppTheme } from '../../context';

const theme = false;
export const FullScreenWrapper = ({ children, style }) => {
  const COLOR = useColors()

  const { styles } = stylez(COLOR);
  return (
    <View style={[styles.fullScreenWrapper, style]}>
      <StatusBar hidden />
      {children}
    </View>
  );
};

export const MainWrapper = ({ children, style }) => {
  const COLOR = useColors()

  const { styles } = stylez(COLOR);
  return <SafeAreaView style={[styles.mainContainer, style]}>{children}</SafeAreaView>;
};

export const ScrollWrapper = ({
  children = {},
  style = {},
  horizontal = false,
  nestedScrollEnabled = false,
  contentContainerStyle = {},
}) => {
  const COLOR = useColors()

  const { styles } = stylez(COLOR);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={contentContainerStyle}
      horizontal={horizontal}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={nestedScrollEnabled}
      style={[style]}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export const ComponentWrapper = ({ children, style }) => {
  const COLOR = useColors()

  const { styles } = stylez(COLOR);
  return (
    <View style={[styles.compContainer, style]}>
      {children}
    </View>
  );
};

export const BackgroundWrapper = ({ children, style, animation, duration, isStart }) => {
  const COLOR = useColors()

  const { styles } = stylez(COLOR);
  // const { theme } = useAppTheme();
  return (
    <ImageBackground
      style={styles.backgroundWrapper}
      source={theme ? Images.bgDark : isStart ? Images?.bgLight : Images?.bgLight2}
    >
      {Platform.OS == 'ios' && <SafeAreaView style={[styles.mainContainer, style]}>{children}</SafeAreaView>}
      {Platform.OS == 'android' && <>{children}</>}
    </ImageBackground>
  );
};
export const Wrapper = ({ children, style = {},  }) => {
  const COLOR = useColors()

  const { styles } = stylez(COLOR);
  return (
    <View
      // iterationCount={iterationCount}
      // animation={animation}
      // duration={duration}
      style={[ style]}
    >
      {children}
    </View>
  );
};

export const RowWrapper = ({ children, style = {} }) => {
  const COLOR = useColors()

  const { styles } = stylez(COLOR);
  return <View style={[styles.rowCompContainer, style]}>{children}</View>;
};

export const RowWrapperBasic = ({ children, style = {}, }) => {
  const COLOR = useColors()

  const { styles } = stylez(COLOR);
  return (
    <View style={[styles.rowView, style]}>
      {children}
    </View>
  );
};
export const LinearCurveWrapper = ({ children, start, imageStyle }) => {
  // const { theme } = useAppTheme();
  const COLOR = useColors()

  const { styles } = stylez(COLOR);
  return (
    <SafeAreaView style={styles.linearCurveContainer}>
      {/* Screen Background Image section */}
      <View style={StyleSheet.absoluteFillObject}>
        {!start && (
          <View style={[styles.imageContainer, imageStyle]}>
            {!theme && <Image style={styles.image} source={Images?.linearCurve} />}
          </View>
        )}
        {!theme && <View style={styles.semiCircle} />}
      </View>
      {children}
    </SafeAreaView>
  );
};
