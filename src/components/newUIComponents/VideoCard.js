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

const VideoCard = () => {
  return (
    <View style={styles.container}>
      <Video
        source={require('../../assets/videos/video2.mp4')}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />
      <View style={styles.playBtn}>
        <Image
          source={require('../../assets/images/play.png')}
          style={styles.giftIcon}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: wp('40%'),
    width: wp('67%'),

    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    borderRadius: wp('4%'),
    margin: wp('2%'),
  },
  backgroundVideo: {
    height: wp('40%'),
    width: wp('67%'),
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    borderRadius: wp('4%'),
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
});
export default VideoCard;
