import * as React from 'react';
import {Text, View, Image} from 'react-native';

export default function LogoTitle(prop: any) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingBottom: 5,
      }}>
      <Image
        style={{width: 20, height: 20}}
        source={require('../assets/exclaimer.png')}
      />
      <Text style={{paddingLeft: 5}}>{prop.title}</Text>
    </View>
  );
}
