import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
  Animated,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import Video from 'react-native-video';
import * as Colors from './src/constants/colors';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

import * as Typography from './src/constants/typography';

import NewHeader from './src/components/newUIComponents/NewHeader';
import VideoCard from './src/components/newUIComponents/VideoCard';
import TextWithicon from './src/components/newUIComponents/TextWithicon';
import TextWithOutIcon from './src/components/newUIComponents/TextWithOutIcon';
import SeeAll from './src/components/newUIComponents/SeeAll';
import ImageWithDesc from './src/components/newUIComponents/ImageWithDesc';
import PrograssView from './src/components/newUIComponents/PrograssView';

const App = () => {
  let scrollOffsetY = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container} forceInset={{top: 'always'}}>
      <StatusBar hidden={true} />
      <Video
        source={require('./src/assets/videos/video3.mp4')}
        style={styles.backgroundVideo}
        muted={true}
        repeat={true}
        resizeMode={'cover'}
        rate={1.0}
        ignoreSilentSwitch={'obey'}
      />
      <View
        style={[
          {
            position: 'absolute',
            top: hp('5%'),
            // zIndex: 100,
            alignItems: 'center',
            alignSelf: 'center',
            // opacity: fadeAnim,
          },
        ]}>
        <NewHeader />
      </View>
      <ScrollView>
        {/* <NewHeader /> */}

        <LinearGradient
          colors={[
            'transparent',
            Colors.Purple_Anxiety2,
            Colors.Purple_Anxiety2,
          ]}
          // start={{x: 0, y: 0.2}}
          // end={{x: 0, y: 1}}
          style={[styles.containerGradient, {marginTop: 100}]}>
          <Text
            style={{
              width: wp('90%'),
              marginTop: hp('20%'),
              alignSelf: 'center',
              // paddingBottom: hp('2%'),
              fontSize: Typography.FONT_SIZE_15,
              color: Colors.White,
              fontWeight: 500,
            }}>
            Start with one of these
          </Text>
          <View
            style={{
              position: 'absolute',
              top: hp('19%'),
              // zIndex: 100,
              alignItems: 'flex-end',
              alignSelf: 'flex-end',
            }}>
            <PrograssView />
          </View>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
          </ScrollView>
          <View style={styles.line} />

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TextWithicon />
            <TextWithicon />
            <TextWithicon />
            <TextWithicon />
            <TextWithicon />
            <TextWithicon />
          </ScrollView>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TextWithicon />
            <TextWithicon />
            <TextWithicon />
            <TextWithicon />
            <TextWithicon />
            <TextWithicon />
          </ScrollView>
        </LinearGradient>
        <View style={{backgroundColor: Colors.Purple_Anxiety2}}>
          <View style={styles.line} />
          <SeeAll />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <ImageWithDesc />
            <ImageWithDesc />
            <ImageWithDesc />
            <ImageWithDesc />
            <ImageWithDesc />
            <ImageWithDesc />
            <ImageWithDesc />
          </ScrollView>

          <View style={styles.line} />
        </View>
        <View
          style={{
            position: 'absolute',
            top: hp('40%'),
          }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{paddingLeft: 30}}>
            <TextWithOutIcon />
            <TextWithOutIcon />
            <TextWithOutIcon />
            <TextWithOutIcon />
            <TextWithOutIcon />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // width: wp('100%'),
    // height: hp('100%'),
    backgroundColor: Colors.Purple_Anxiety2,
    flex: 1,
  },
  containerGradient: {
    paddingBottom: 20,
    backgroundColor: Colors.g2,
    // marginTop: hp('20%'),
    borderColor: Colors.g2,
    shadowColor: Colors.g1,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  backgroundVideo: {
    height: wp('100%'),
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },

  line: {
    width: wp('90%'),
    height: hp('0.1%'),
    backgroundColor: Colors.lightBlack,
    marginVertical: hp('1%'),
    alignSelf: 'center',
  },
  // scrollViewStyle: {
  //   // backgroundColor: Colors.Medium_Dark,
  //   paddingBottom: hp('5%'),
  //   marginTop: hp('-10%'),
  //   zIndex: 100,
  //   //   backgroundColor: Colors.g2,
  //   //   shadowColor: Colors.g1,
  //   //   shadowOffset: {
  //   //     width: 0,
  //   //     height: 12,
  //   //   },
  //   //   shadowOpacity: 0.58,
  //   //   shadowRadius: 16.0,
  //   //   elevation: 24,
  // },
});
export default App;
