import * as React from "react";
import { StyleSheet, Text, View, Button, TextInput, Alert, ToastAndroid } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const FunButton = (navigation) =>(
  <Button title="Go to Fun page" onPress={()=>navigation.navigate("Fun")}/>
 )
 const ContactButton = (navigation) =>(
  <Button title="Go to Contact page" onPress={()=>navigation.navigate("Contact")}/>
 )
 const GoBackButton = (navigation) =>(
  <Button title="Hey! Go back!" onPress={()=>navigation.goBack()}/>
 )

export const Buttons = {
    FunButton,
    ContactButton,
    GoBackButton
}