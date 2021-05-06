import { StatusBar } from 'expo-status-bar';
import React,{ Component } from 'react';
import { StyleSheet, Text,TextInput, View,Button, Alert ,Linking} from 'react-native';


export default function App() {
  const createAlert = () =>
    Alert.alert(
      "Alert Box",
      "Registration Successfull",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome To Register Page</Text>
      
        
        <Text style={styles.label}>Name : </Text>
        <TextInput type="text" placeholder="Enter your name" label="Name" style={styles.input}/>
        <Text style={styles.label2}>Email : </Text>
        <TextInput type="email" placeholder="Enter your email" style={styles.input}/>
        <Text style={styles.label2}>Phone : </Text>
        <TextInput type="number" placeholder="Enter your Number" style={styles.input}/>
        <Text style={styles.label3}>Password : </Text>
        <TextInput type="password" placeholder="Enter your password" style={styles.input4} />
        
        <Text style={styles.label4}>Already Have Account ? : </Text>
        <Text style={{color: 'blue'}}
         onPress={() => Linking.openURL('http://google.com')}>
        Click Here
        </Text>
        <Button title="Sign up" onPress={createAlert}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `#EEE8AA`,
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop:50,
  },
  heading:{
      fontSize:30,
      paddingTop:30,
      color:`#D2691E`,
      fontWeight:"500",
      borderBottomWidth:3,
      borderBottomColor:'#199187',
    },
    input:{
      marginTop:1,
      fontSize:25,
      borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    width:300,
    height:50,
    textAlign:'center'
    },
    input4:{
      marginTop:1,
      marginBottom:30,
      fontSize:25,
      borderWidth: 1,
    borderColor: "black",
    borderRadius: 50,
    width:300,
    height:50,
    textAlign:'center'
    },
    label:{
      marginTop:100,
      marginRight:200,
      fontSize:25,
    },
    label2:{
      marginTop:10,
      marginRight:200,
      fontSize:25,
    },
    label3:{
      marginTop:10,
      marginLeft:35,
      marginRight:200,
      fontSize:25,
    },
});