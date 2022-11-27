import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, ToastAndroid } from 'react-native';
import {Buttons} from "./Buttons" 

function ContactScreen ({ navigation }) {
  const [formStatus, setFormStatus] = React.useState('Submit');
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  
  const Seperator = () =>{
    return <View style={styles.seperator}></View>
  }

  const buttonConfig = [
    {text:"Yes", onPress:()=>{ToastAndroid.show("Thank You "+JSON.stringify(name), ToastAndroid.SHORT),
    setFormStatus('Submit')}},
    {text:"No", onPress:()=>{}}
  ]
  const submit = () => {
    Alert.alert("Attention", "Are you sure to submit?",buttonConfig);
    setFormStatus('Submitting...');
    setEmail('');
    setName('');
    setMessage('');
  }
  return (
    <View>
          <Seperator/>
          {Buttons.FunButton(navigation)}
          <Seperator/>
          {Buttons.GoBackButton(navigation)}
          <Text style={{fontWeight:"bold",margin:10, fontSize: 18}}>Contact Us:</Text>
          <View style={styles.form}>
            <Text>Name:</Text>
            <TextInput style={styles.input} keyboardType="text" value={name} onChangeText={(e)=>setName(e)} required/>

            <Text>Email:</Text>
            <TextInput style={styles.input} keyboardType="email" value={email} onChangeText={(e)=>setEmail(e)} required/>

            <Text>Message:</Text>

            <TextInput style={styles.input} keyboardType="text" value={message} onChangeText={(e)=>setMessage(e)} 
            multiline={true} numberOfLines={4} required/>

            <Button type="submit" title={formStatus} onPress={submit}/>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "gold",
    borderRadius:15,
    marginVertical:15
  },
  form:{
    margin:10
  },
    seperator:{
    margin:5
  }
});
export default ContactScreen;