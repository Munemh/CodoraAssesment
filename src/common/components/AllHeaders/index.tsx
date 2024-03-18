import Colors from '@/main/color';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ActivityIndicator, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RowWrapper, RowWrapperBasic, Wrapper } from '../Wrappers';
import { Spacer } from '../spacer';
import { MediumText, SmallTitle } from '@/common/core-ui';
import { height, totalSize, width } from '@/common/helpers';
import { fontFamily, fontSize } from '@/common/helpers/fonts';
import { Hrline } from '../LineView';
import { useColors } from '@/common/GlobalStyle';
interface appHeaderTypes {
  onPress?: () => void;
  title: string;
  hideBackBtn?: boolean;
  withBorder?: boolean;
  right?: any;
  onRightPress?: () => void;
  onBackPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  isChat?: boolean;
  rightDisabled?: boolean;
  styleTitle?: {}
}
export const ButtonSkip = ({
  onPress = () => { },
  title = 'Skip',
  backgroundColor = 'transparent',
  containerStyle,
  textColor = Colors.button,
  textWidth = 73,
  textHeight = 36,
  buttonRadius = 18,
}) => {
  // const colorList = useColors();

  return (
    <View
      style={{
        marginHorizontal: 20,
        marginVertical: 10,
        ...containerStyle,
      }}>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            minWidth: 73,
            width: textWidth,
            height: textHeight,
            borderRadius: buttonRadius,
            color: textColor,
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 19.6,
            backgroundColor: backgroundColor,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export const AppHeader = ({
  title,
  hideBackBtn,
  withBorder,
  right,
  onRightPress,
  disabled,
  loading,
  onBackPress,
  styleTitle,
  rightDisabled,
}: appHeaderTypes) => {
  const colors = useColors();
  return (
    <Wrapper>
      <Spacer isSmall />
      <RowWrapper>
        <RowWrapperBasic >
          {
            <>
              <TouchableOpacity style={{paddingLeft: 15,width:30}}onPress={onBackPress}>
                {/* <BackIcon /> */}
                {!hideBackBtn && <Text style={{ fontSize: 20, textAlign: 'center' }}>{'<'}</Text>}
              </TouchableOpacity>
              <Spacer isBasic horizontal />
            </>
          }
          <SmallTitle style={[{ ...styles.appHeaderText, ...styleTitle }]} color={colors.textColor1}>
            {title}
          </SmallTitle>
        </RowWrapperBasic>
        {right && (
          <TouchableOpacity onPress={onRightPress} disabled={rightDisabled}>
            {loading && <ActivityIndicator color={colors.textColor6} />}
            {!loading && (
              <MediumText
                style={styles.title}
                color={
                  rightDisabled || disabled
                    ? colors.textColor5
                    : colors.textColor6
                }>
                {right}
              </MediumText>
            )}
          </TouchableOpacity>
        )}
      </RowWrapper>
      <Spacer isSmall />
      {withBorder && <Hrline color={colors.borderColor} />}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
    right: -7,
    top: -4,
    backgroundColor: 'red',
    // height: width(4),
    // width: width(4),
    height: totalSize(2),
    width: totalSize(2),
    borderRadius: width(2),
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: '#fff'
  },
  headerIconWrapper: {
    height: width(15),
    width: width(15),
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerWithIconText: {
    fontFamily: fontFamily.PoppinsRegular,
    textAlign: 'center',
  },
  chatHeaderText: {
    fontFamily: fontFamily.RalewayBold,
    fontSize: fontSize.large,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondryHeaderText: {
    fontFamily: fontFamily.RalewayBold,
  },
  appHeaderText: {
    marginBottom: 5,
  },
  sectionText: {
    fontFamily: fontFamily.RalewayBold,
  },
  sectionTitle: {
    fontFamily: fontFamily.RalewayBold,
    fontSize: fontSize.h6,
  },
  compContainer: {
    marginHorizontal: width(5),
  },
  title: {
    fontFamily: fontFamily.LatoBold,
  },
  msgTitle: {
    fontFamily: fontFamily.RalewayBold,
    fontSize: fontSize.h5A,
    margin: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width(5),
  },
  chatWrapperIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 5,
  },
  storyViewer: {
    fontFamily: fontFamily.LatoBold,
    fontSize: fontSize.large,
  },
  headerWrapper: {
    // marginHorizontal: width(5),
    marginTop: Platform.OS == 'ios' ? height(4) : height(2),
    justifyContent: 'space-around',
  },
  spaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonStyle: {
    width: width(22),
    height: height(4),
    borderRadius: 4,
    // paddingHorizontal: 5,
    // paddingVertical: 4,
  },
  buttonTextStyle: {
    fontFamily: fontFamily.LatoBold,
    fontSize: fontSize.medium,
  },
  imageStyle: {
    height: height(24),
    width: width(100),
    resizeMode: 'contain',
  },
  headerWrapperContainer: {
    justifyContent: 'space-between',
    marginHorizontal: width(2),
    marginTop: Platform.OS == 'ios' ? height(3.5) : height(0),
  },
  textHeaderWrapper: {
    // marginTop: height(1),
    marginHorizontal: width(5),
  },
  avatarWrapper: {
    alignSelf: 'center',
    marginTop: height(4),
  },
  userName: {
    fontFamily: fontFamily.RalewayBold,
    fontSize: fontSize.h6,
  },
  name: {
    fontFamily: fontFamily.LatoBold,
    fontSize: fontSize.regular,
  },
  profile: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile_circle: {
    borderWidth: 1,
    padding: 3,
    borderColor: 'white',
    borderRadius: 100,
  },
  profile_image: {
    width: totalSize(8),
    height: totalSize(8),
    borderRadius: 100,
  },
  margin: {
    margin: totalSize(0.5),
  },
  liveStreamWrapper: {
    marginHorizontal: width(5),
    // marginVertical: Platform.OS == "ios" ? height(4) :  height(2),
    marginTop: Platform.OS == 'ios' ? height(4) : height(2),
    justifyContent: 'space-between',
  },
  camera: {
    backgroundColor: 'white',
    padding: 6,
    borderWidth: 1,
    borderRadius: 25,
    alignSelf: 'center',
  },
  profile_icon: {
    position: 'absolute',
    bottom: -8,
    right: -8,
  },
  cover_icon: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    zIndex: 1000,
  },
});