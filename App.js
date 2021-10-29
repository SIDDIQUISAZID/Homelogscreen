import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView } from 'react-native'
import  { RNLockScreen } from 'react-native-lock-screen';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
      isSelectedBtn: 'Sample',
   

    };
  }


  
  
  render() {
 
    return (
      <SafeAreaView>
     <RNLockScreen type={RNLockScreen.Type.Pin} mode={RNLockScreen.Mode.Capture} onCapture={lock => {
  }} onVerified={() => {

  }}
  lock={'123'}
/>
      </SafeAreaView>
    


    )
  }
}

const styles = StyleSheet.create({})
