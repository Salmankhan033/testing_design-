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

const TextWithOutIcon = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Bank icon </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: hp('7%'),
    width: wp('22%'),
    backgroundColor: Colors.Purple_Anxiety2,
    borderRadius: wp('4%'),
    // margin: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: Colors.White,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    fontSize: Typography.FONT_SIZE_15,

    width: wp('15%'),
  },
});
export default TextWithOutIcon;
