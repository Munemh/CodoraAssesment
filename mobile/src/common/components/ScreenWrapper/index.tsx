import React, { Fragment, ReactNode } from 'react';
import {
  Dimensions,
  ImageBackground,
  Platform,
  SafeAreaView,
  StatusBar,
  View, TouchableOpacity,
  Keyboard,
  ViewStyle,
  ImageStyle,
  ScrollView,
} from 'react-native';
import { height } from 'react-native-dimension';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
  useIsFocused,
  useTheme,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

interface ScreenWrapperProps {
  children: ReactNode;
  statusBarColor?: string;
  transclucent?: boolean;
  scrollEnabled?: boolean;
  backgroundImage?: any; // change to any type as it depends on the image source
  containerViewStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  contentContainerStyle?: ViewStyle;
  headerUnScrollable?: () => ReactNode;
  footerUnScrollable?: () => ReactNode;
  lightContent?: boolean;
  backgroundColor?: string;
  backgroundColorContainer?: string;
  scrollViewRef?: React.RefObject<ScrollView>;
}

export const ScreenWrapper = ({
  children,
  statusBarColor = '#F2F2F2',
  transclucent = false,
  scrollEnabled = false,
  backgroundImage,
  containerViewStyle = {},
  imageStyle = {},
  contentContainerStyle = {},
  headerUnScrollable = () => null,
  footerUnScrollable = () => null,
  lightContent = false,
  backgroundColor = '#FFFFFF',
  backgroundColorContainer = '#FFFFFF',
  scrollViewRef,
}: ScreenWrapperProps) => {
  if (backgroundImage) {
    backgroundColor = 'transparent';
    backgroundColorContainer = 'transparent';
  }
  function FocusAwareStatusBar(props: StatusBarProps) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  }

  const content = () => {
    return (
      <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
        {headerUnScrollable()}
        <View
          style={[
            styles.mainViewContainer,
            containerViewStyle,
            { backgroundColor: backgroundColorContainer },
          ]}
        >
          {scrollEnabled ? (
            <KeyboardAwareScrollView
              ref={scrollViewRef}
              extraScrollHeight={5}
              enableOnAndroid={true}
              contentContainerStyle={[
                styles.contentContainer,
                contentContainerStyle,
                // {
                //   paddingBottom:
                //     Platform.OS === 'ios' ? height(12.75) : height(10),
                // },
              ]}
              keyboardShouldPersistTaps="handled"
              showsVerticalScrollIndicator={false}
            >
              {children}
            </KeyboardAwareScrollView>
          ) : (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                Keyboard.dismiss();
              }}
              style={styles.mainViewContainer}
            >
              {children}
            </TouchableOpacity>
          )}
        </View>
        {footerUnScrollable()}
      </View>
    );
  };

  const theme = useTheme();

  return (
    <Fragment>
      <FocusAwareStatusBar
        barStyle={theme.dark ? 'light-content' : 'dark-content'}
        backgroundColor={statusBarColor}
        translucent={transclucent}
      />
      {!transclucent && (
        <SafeAreaView style={{ backgroundColor: backgroundColor }} />
      )}
      {backgroundImage ? (
        <ImageBackground
          source={backgroundImage}
          style={[styles.container, imageStyle]}
          resizeMode={'cover'}
        >
          {content()}
        </ImageBackground>
      ) : (
        content()
      )}
    </Fragment>
  );
};