import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Colors from '../../constants/colors';
import * as Typography from '../../constants/typography';
const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBg}>
        <Lottie
          source={require('../../assets/animations/traingle.json')}
          style={styles.aniIcon}
          autoPlay
          loop
        />
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>Charis</Text>
      </View>
      <TouchableOpacity style={styles.iconBg}>
        <Image
          source={require('../assets/images/gift_box.png')}
          style={styles.giftIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp('92%'),
    height: hp('10%'),
    // backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  giftIcon: {
    width: wp('5%'),
    height: wp('5%'),
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
    fontSize: Typography.FONT_SIZE_24,
  },
});

export default HomeHeader;
