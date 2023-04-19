import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CircularProgress} from 'react-native-circular-gradient-progress';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Video from 'react-native-video';

import * as Colors from '../../constants/colors';
import * as Typography from '../../constants/typography';
const PrograssView = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require('../../assets/videos/video3.mp4')}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />
      <CircularProgress
        startColor={Colors.Spicy_Berry}
        middleColor={Colors.Boat_Orchid}
        color={Colors.Spicy_Berry}
        endColor={'red'}
        emptyColor={Colors.gray}
        size={30}
        progress={30}
      />
      <Text style={styles.textStyle}>4</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp('10%'),
    height: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    // height: wp('100%'),
    width: wp('20%'),
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
    opacity: 0.5,
  },
  textStyle: {
    color: Colors.White,
    position: 'absolute',
  },
});
export default PrograssView;
