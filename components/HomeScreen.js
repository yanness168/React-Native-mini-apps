import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import {Buttons} from "./Buttons";
import * as Progress from 'react-native-progress';

function HomeScreen({ navigation }) {  
  const API = "https://date.nager.at/api/v2/publicholidays/2020/US";
  const [data,setData] = React.useState([])
  const [loading, setLoading] = React.useState(true);
  const Seperator = () =>{
    return <View style={styles.seperator}></View>
  }

    /* Desctructure the "item" */
  const renderHoliday = ({item}) => <Holiday name={item.name} date={item.date} />;

  /* The templete of a list */
  const Holiday = (props) =>(
    <View style={styles.item}>
      <Text>Holiday Name: {props.name}</Text>
      <Text>Date: {props.date}</Text>
    </View>
  )

  React.useEffect(()=>{
    const fetchData = async () => {
      await fetch(API)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((e) => console.error(e));
    };

    const timer = setTimeout(() => {
      fetchData();
      setLoading(false);
    }, 3000);

    return () => {clearTimeout(timer)};
    },[])

  return (
    <ScrollView >
      <Seperator/>
      {Buttons.FunButton(navigation)}
      <Seperator/>
      {Buttons.ContactButton(navigation)}
      {loading && <Progress.CircleSnail color={['blue']} indeterminate={true} style={{alignSelf: "center", margin:12}} loading={true}/>}
      <Seperator/>
      <FlatList style={styles.List}
      data={data}
      renderItem={renderHoliday}
      keyExtractor={(item, index) => index.toString()}>
      </FlatList>
    </ScrollView>);
}

const styles = StyleSheet.create({
  item:{
    borderWidth:1,
    padding:10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "pink",
  },
  seperator:{
    margin:5
  }
})
export default HomeScreen;