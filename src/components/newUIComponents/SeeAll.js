import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Colors from '../../constants/colors';
import * as Typography from '../../constants/typography';

const SeeAll = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.leftTxt}>Recommended Collections</Text>
      <Text style={styles.rightTxt}>See All</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp('92%'),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftTxt: {
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.White,
  },
  rightTxt: {
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.White,
  },
});
export default SeeAll;
