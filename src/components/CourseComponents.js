import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Colors from '../constants/colors';
import * as Typography from '../constants/typography';

const CourseComponents = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={styles.iconBg}
        style={styles.iconBg}
        source={require('../assets/images/imge2.jpeg')}>
        <View style={styles.playBtn}>
          <Image
            source={require('../assets/images/play.png')}
            style={styles.giftIcon}
          />
        </View>
      </ImageBackground>
      <View style={styles.textView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.courseTxt}>Course</Text>
          <View
            style={{
              width: wp('0.7%'),
              height: wp('0.7%'),
              borderRadius: wp('0.4%'),
              margin: wp('1%'),
              backgroundColor: Colors.White,
            }}
          />
          <Text style={styles.courseTxt}>10 min</Text>
        </View>
        <Text style={styles.welcomeTxt}>Your Special Welcome Offer</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.offerTxt}>Day 1</Text>
          <View
            style={{
              width: wp('0.7%'),
              height: wp('0.7%'),
              borderRadius: wp('0.4%'),
              margin: wp('1%'),
              backgroundColor: Colors.White,
            }}
          />
          <Text style={styles.offerTxt}>The Big Idea</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp('92%'),
    // height: hp('12%'),
    backgroundColor: Colors.Tanzanite2,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    padding: wp('2.5%'),
    // paddingVertical: hp('2.5%'),
    borderRadius: wp('4%'),
    // borderWidth: wp('0.4%'),
    // borderColor: Colors.Medium_Dark,
    marginVertical: hp('1.5%'),
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
    margin: wp('2%'),
  },
  iconBg: {
    width: wp('25%'),
    height: hp('12%'),
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    borderRadius: wp('4%'),
  },

  textView: {
    width: wp('60%'),
  },
  welcomeTxt: {
    color: Colors.White,
    fontSize: Typography.FONT_SIZE_15,
    marginVertical: hp('0.5%'),
  },
  offerTxt: {
    color: Colors.White,
    fontSize: Typography.FONT_SIZE_11,
  },
  courseTxt: {
    color: Colors.White,
    fontSize: Typography.FONT_SIZE_10,
  },
});
export default CourseComponents;
