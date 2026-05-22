import { Text, Pressable, View ,StyleSheet,Button } from "react-native";
import { useState } from 'react'


export default function Index() {

  const [trivia,updateTrivia]=useState("Click for question")
  const [color,updateColor]=useState(true);

const prit=async()=>{

  const ques=await fetch("https://triviayallah-1.onrender.com/easy")


  const data=await ques.text();

  const jsam=await JSON.parse(data);

  await  updateTrivia(jsam.results[0].question);

  console.log(jsam.results[0].question);
  
}


  return (
    
    <View style={body.container }>

    <View style={styles.container}>

    <View style={styles.mar}>
      <Text style={styles.text}>{trivia}</Text>
    </View>

    <Pressable style={({pressed})=>[

      styles.but, pressed ? styles.activebut : styles.inactivebut
    ]} onPress={prit}><Text>Get Question </Text></Pressable>
    </View>

    </View>

  );
}

const body =StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    width:'100%',
  },

});

const styles =StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'lightblue',
    height:'100%',
    width:'100%',
  },

  text:{
    fontSize:25,
  },

  but:{

    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    borderRadius:50,
    height:'7%',
    width:'30%',
    backgroundColor:'white',
    borderWidth:3,
    borderColor:"red",
  },
  
  activebut:{
    backgroundColor:'red'
  },

  inactivebut:{

    backgroundColor:'green'
  },
  

  mar:{

    justifyContent:"center",
    alignItems:"center",
    height:'30%',
    width:'80%',
    borderWidth:2,
    borderColor:'white',
  }
});
