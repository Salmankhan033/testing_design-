import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import * as Colors from '../constants/colors';
import * as Typography from '../constants/typography';
const FavoritesComponents = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Image
          source={require('../assets/images/heart.png')}
          style={styles.giftIcon}
        />
        <Text>Favorites</Text>
      </View>
      <View style={styles.viewContainer}>
        <Image
          source={require('../assets/images/clock.png')}
          style={styles.giftIcon}
        />
        <Text style={styles.text}>Favorites</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewContainer: {
    width: wp('45%'),
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: Colors.Biscay,
    borderRadius: wp('3%'),
  },
  giftIcon: {
    width: wp('5%'),
    height: wp('5%'),
  },
  text: {
    color: Colors.White,
  },
});

export default FavoritesComponents;
