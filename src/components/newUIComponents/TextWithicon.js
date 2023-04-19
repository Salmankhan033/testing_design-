import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Video from 'react-native-video';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Colors from '../../constants/colors';
import * as Typography from '../../constants/typography';

const TextWithicon = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/play.png')}
        style={styles.giftIcon}
      />
      <Text style={styles.textStyle}>Bank icon </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: hp('6%'),
    width: wp('30%'),
    backgroundColor: Colors.Purple_Anxiety2,
    borderColor: Colors.White,
    borderWidth: wp('0.2%'),
    borderRadius: wp('3%'),
    margin: wp('1%'),
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  giftIcon: {
    width: wp('3.5%'),
    height: wp('3.5%'),
    alignSelf: 'center',
  },
  textStyle: {
    color: Colors.White,

    fontSize: Typography.FONT_SIZE_10,
    // width: wp('20%'),
    textAlign: 'center',
    paddingTop: hp('0.5%'),
  },
});
export default TextWithicon;
