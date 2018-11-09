import React from 'react';
import * as Expo from 'expo';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  componentDidMount() {
    this.checkDeviceForHardware();
  }
checkDeviceForHardware = async () => {
    let compatible = await Expo.LocalAuthentication.hasHardwareAsync();
    this.setState({ compatible });
    if (!compatible) {
      console.log("not compatible");
    }
  };
showIncompatibleAlert = () => {
    this.dropdown.alertWithType(
      'error',
      'Incompatible Device',
      'Current device does not have the necessary hardware to use this API.'
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
