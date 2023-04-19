import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Colors from '../constants/colors';
import * as Typography from '../constants/typography';

const WelcomeContainer = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.Trinided, Colors.Viking, Colors.ArtyClick]}
        style={styles.iconBg}>
        <Image
          source={require('../assets/images/clock.png')}
          style={styles.giftIcon}
        />
      </LinearGradient>
      <View style={styles.textView}>
        <Text style={styles.welcomeTxt}>Your Special Welcome Offer</Text>
        <Text style={styles.offerTxt}>Get 40% Off Calm - Today Only</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp('92%'),
    height: hp('9%'),
    backgroundColor: Colors.White,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: hp('2%'),
    borderRadius: wp('4%'),
    // borderWidth: wp('0.4%'),
    // borderColor: Colors.Medium_Dark,
  },
  giftIcon: {
    width: wp('9%'),
    height: wp('9%'),
  },

  iconBg: {
    width: wp('20%'),
    height: hp('9%'),
    backgroundColor: Colors.Biscay,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: wp('4%'),
    borderTopLeftRadius: wp('4%'),
    borderBottomLeftRadius: wp('4%'),
  },
  textView: {
    width: wp('70%'),
  },
  welcomeTxt: {
    color: Colors.Black,
    fontSize: Typography.FONT_SIZE_15,
  },
  offerTxt: {
    color: Colors.Black,
    fontSize: Typography.FONT_SIZE_11,
  },
});
export default WelcomeContainer;
