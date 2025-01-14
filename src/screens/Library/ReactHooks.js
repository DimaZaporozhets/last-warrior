import React from 'react';
import {Button, Header, ScreenView} from '../../components';
import {View, ScrollView} from 'react-native';
import {Colors, sg} from '../../styling';
import {ReactHooksStyle} from '../../styling/screens/ReactHooks';
import {reactHooks} from '../../constants';

const ReactHooks = ({navigation}) => {
  const goTo = (route) => () => navigation.navigate(route);
  const goBack = () => navigation.goBack();
  return (
    <ScreenView
      childrenStyle={{backgroundColor: Colors.black}}
      statusBarColor={Colors.black}>
      <Header onBack={goBack} title="React Hooks" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[ReactHooksStyle.container, sg.mT30]}>
        {reactHooks.map((it) => (
          <View style={[sg.mT20, sg.width100p]} key={it.id}>
            <Button {...it} onPress={goTo(it.pathway)} />
          </View>
        ))}
      </ScrollView>
    </ScreenView>
  );
};

export default ReactHooks;
