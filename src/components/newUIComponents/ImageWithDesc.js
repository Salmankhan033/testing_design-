import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import * as Colors from '../../constants/colors';
import * as Typography from '../../constants/typography';
const ImageWithDesc = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/imge2.jpeg')}
        blurRadius={30}
        imageStyle={styles.BgImg}
        style={styles.iconBg}>
        <Image
          source={require('../../assets/images/imge2.jpeg')}
          style={styles.image}
        />
        <View style={styles.playBtn}>
          <Image
            source={require('../../assets/images/play.png')}
            style={styles.giftIcon}
          />
        </View>
      </ImageBackground>
      <Text style={styles.title}>Video One seeting</Text>
      <Text style={styles.description}>Video One seeting</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // margin: 30,
    marginHorizontal: wp('1%'),
    marginVertical: hp('1%'),
  },
  iconBg: {
    width: wp('35%'),
    height: hp('10%'),
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BgImg: {
    borderRadius: wp('5%'),

    borderColor: 'rgba(158, 150, 150, .5)',
  },
  giftIcon: {
    width: wp('3%'),
    height: wp('3%'),
    alignSelf: 'center',
  },
  playBtn: {
    width: wp('5%'),
    height: wp('5%'),
    backgroundColor: Colors.Black,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('2.5%'),
    // margin: wp('2%'),
    position: 'absolute',
    alignSelf: 'flex-start',
    bottom: hp('1%'),
    left: wp('2%'),
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: wp('25%'),
    height: wp('24%'),
    alignSelf: 'center',
    borderRadius: wp('10%'),
    overflow: 'hidden',
  },
  title: {
    color: Colors.White,
    fontSize: Typography.FONT_SIZE_11,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    width: wp('33%'),
    marginLeft: wp('2%'),
  },
  description: {
    width: wp('35%'),
    color: Colors.White,
    fontSize: Typography.FONT_SIZE_11,
    paddingTop: hp('0.4%'),
    marginLeft: wp('2%'),
  },
});

export default ImageWithDesc;
