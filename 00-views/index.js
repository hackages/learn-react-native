import React from 'react';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{ backgroundColor: 'red', flex: 1 }}>
        <Text>This is a test</Text>
      </View>
      <View style={{ backgroundColor: 'blue', flex: 1 }}>
        <Text>This is a test</Text>
      </View>
      <View style={{ backgroundColor: 'green', flex: 1 }}>
        <Text>This is a test</Text>
      </View>
    </View>
  );
};
export default App;
