import * as React from 'react';
import {TouchableOpacity, View, Image} from 'react-native';

export function BackPageIcon(prop: any) {
  return (
    <View
      style={{
        position: 'absolute',
        paddingTop: 30,
        marginLeft: 20,
        zIndex: 4,
        opacity: 0.65,
      }}>
      <TouchableOpacity onPress={prop.onPress}>
        <Image
          style={{width: 30, height: 30}}
          source={require('../assets/arrow-down.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
