import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Colors from '../constants/colors';
import * as Typography from '../constants/typography';
const FeelingComponents = () => {
  return (
    <View>
      <View style={styles.textView}>
        <Text style={styles.headerTxt}>Good AftenNoon Peace Angel</Text>
      </View>

      <TouchableOpacity style={styles.container}>
        <View style={styles.leftContainer}>
          <LinearGradient
            colors={[Colors.Trinided, Colors.Viking, Colors.ArtyClick]}
            style={styles.iconBg}>
            <Image
              source={require('../assets/images/smile_icon.png')}
              style={styles.giftIcon}
            />
          </LinearGradient>

          <Text style={styles.text}>How are you feelings?</Text>
        </View>
        <View>
          <Image
            source={require('../assets/images/right.png')}
            style={styles.giftIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp('92%'),
    height: hp('7%'),
    backgroundColor: Colors.Tanzanite,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    paddingHorizontal: wp('2%'),
    borderRadius: wp('3%'),
    borderWidth: wp('0.4%'),
    borderColor: Colors.Medium_Dark,
  },
  textView: {
    width: wp('92%'),
    alignSelf: 'center',
    paddingVertical: hp('2%'),
  },
  headerTxt: {
    fontSize: Typography.FONT_SIZE_15,
    color: Colors.White,
    fontWeight: 500,
  },

  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('63%'),
  },
  giftIcon: {
    width: wp('6%'),
    height: wp('6%'),
  },
  aniIcon: {
    width: wp('20%'),
    height: wp('20%'),
    marginBottom: hp('1%'),
  },
  iconBg: {
    width: wp('10%'),
    height: wp('10%'),
    backgroundColor: Colors.Biscay,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp('7.5%'),
  },
  text: {
    color: Colors.White,
    fontSize: Typography.FONT_SIZE_18,
  },
});

export default FeelingComponents;
