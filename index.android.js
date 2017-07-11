/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class simpleApp extends Component {

  constructor(props){
    super(props)
    this.state = {
      text : 'My First Screen'
    }
  }

  handleText =(text) => {
   this.setState({
    text : 'Button Clicked'
   })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native simpleApp!
        </Text>
        <Text style={styles.instructions}>
          {this.state.text}
        </Text>
        <View style={styles.btn}>
          <Button title="Next" color='green' onPress={this.handleText}/>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop : 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginTop : 20,

  },
});

AppRegistry.registerComponent('simpleApp', () => simpleApp);
