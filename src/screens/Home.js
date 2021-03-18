import React from 'react';
import {ImageBackground, View} from 'react-native';
import {HomeScreenStyle} from '../styling/screens/HomeScreen';
import {Button, ScreenView, Text} from '../components/index';
import {Colors, sg} from '../styling';
import {moon} from '../../assets/link/image';

const Home = ({navigation}) => {
  return (
    <ScreenView>
      <ImageBackground source={moon} style={HomeScreenStyle.image}>
        <View
          style={[
            sg.flex,
            {alignItems: 'center', justifyContent: 'space-between'},
          ]}>
          <Text
            style={{
              fontSize: 46,
              color: Colors.white,
              textAlign: 'center',
              marginTop: 100,
            }}
            bold>
            Welcome to home!
          </Text>
          <Button title="Next" size="medium" style={[sg.aSCenter, sg.mV40]} />
        </View>
      </ImageBackground>
    </ScreenView>
  );
};

export default Home;