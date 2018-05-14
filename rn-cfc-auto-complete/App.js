import React from 'react';
import { StyleSheet, View } from 'react-native';

import AutoComplete from "./src/components/styled/autoComplete";

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <AutoComplete />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
      marginTop:100,
      width:300,
      alignSelf:'center',
  },
});
