import React from 'react';
import {SafeAreaView, TouchableHighlight, StyleSheet,
  View, Image, Text, Button, Animated, Easing, Pressable} from 'react-native';
import {Buttons} from "./Buttons" 

const Circle1 = (props) =>{
    return <Animated.View style={[styles.circle,{top: props.Top, left: 200,backgroundColor: props.Color, transform: [{ rotate: props.Rotate }]}]}></Animated.View>
  }
  const Circle2 = (props) =>{
    return <Animated.View style={[styles.circle,{top: props.Top, backgroundColor: "yellow", left: 20}]}></Animated.View>
  }

function FunScreen({ navigation }) {
  const Seperator = () =>{
    return <View style={styles.seperator}></View>
  }

  const initial = React.useRef(new Animated.Value(10)).current;
  const anotherInitial = React.useRef(new Animated.Value(-140)).current;
  
  const holyMove = () =>{
    Animated.sequence([
      Animated.timing(anotherInitial, {
      easing: Easing.bounce,
      toValue: 10,
      duration: 1000,
    }),
      Animated.timing(anotherInitial, {
      easing: Easing.bounce,
      toValue: -140,
      duration: 1000,
    }),
    ]).start();
  }

  const magicMove = () => {
    Animated.sequence([
      Animated.timing(initial, {
      easing: Easing.bounce,
      toValue: 150,
      duration: 2000,
    }),
      Animated.timing(initial, {
      toValue: 1,
      duration: 500,
    }),
      Animated.timing(initial, {
      toValue: 10,
      duration: 2000,
    }),
    ]).start();
  };

  return (
    <SafeAreaView>
      <Seperator/>
      {Buttons.ContactButton(navigation)}
      <Seperator/>
      {Buttons.GoBackButton(navigation)}
      <Seperator/>
      <Circle1 
        Top={initial}
        Rotate = {initial.interpolate({inputRange:[0,1], outputRange:['0deg','360deg']})}
        Color={initial.interpolate({inputRange: [0, 1], outputRange: ["pink", "lightblue"] })}/>

      <Circle2 
        Top={anotherInitial}/>

      <TouchableHighlight
      style={styles.button}
      // set color after being touched
      underlayColor="lightgrey"
      // set the effective clickable area
      hitSlop={{top: 50, left: 20, right: 20, bottom: 100}}
      // set the starting area for no effect
      pressRetentionOffset={20}
      //Must add "onPress()" to show color change
      onPress={magicMove}>
        <View style={styles.buttonContent}>
          <Image
            style={styles.minionLogo}
            source={{uri: 'https://www.pngfind.com/pngs/m/689-6893376_clip-art-minion-logo-gru-minion-logo-png.png'
          }}/>
          <Text style= {{justifyContent: 'center', marginHorizontal:55, marginVertical:10, fontSize:18, fontWeight:"bold"}}>
            Let It Spin!
          </Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
      style={styles.button}
      // set color after being touched
      underlayColor="lightgrey"
      // set the effective clickable area
      hitSlop={{top: 50, left: 20, right: 20, bottom: 100}}
      // set the starting area for no effect
      pressRetentionOffset={20}
      //Must add "onPress()" to show color change
      onPress={holyMove}>
        <View style={styles.buttonContent}>
          <Image
            style={styles.minionLogo}
            source={{uri: 'https://www.pngfind.com/pngs/m/689-6893376_clip-art-minion-logo-gru-minion-logo-png.png'
          }}/>
          <Text style= {{justifyContent: 'center', marginHorizontal:55, marginVertical:10, fontSize:18, fontWeight:"bold"}}>
            Bouncy!!
          </Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  seperator:{
    margin:5
  },
  button: {
    padding: 5,
    marginBottom: 12,
    borderRadius: 15,
    backgroundColor: 'pink' , 
    margin:36
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  minionLogo: {
    width: 40,
    height: 40,
    borderRadius:15
  },
  circle:{
    width: 150,
    height: 150,
    borderRadius: 15,
  },
})
export default FunScreen;