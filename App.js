import React, {useEffect, useState} from 'react';
import { StyleSheet, TextInput, View, Image, Alert, Pressable, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';


export default function App() {

  const [show, setShow] = useState(false);

  const [rates, setRates] = useState({});
  const [selectedCurrency, setselectedCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');
  
  const customData = require('./sampleData.json');
  
  const fetchData = () => {
    setRates(customData.rates)
  }

  useEffect(() => {
    fetchData()
  }, []);


  const convert = () => {
    const resultEur = (Number(amount) / customData.rates[selectedCurrency]);
    setResult(`${resultEur.toFixed(2)}€`)
    console.log(customData.rates);
    console.log(selectedCurrency[0])
    setShow(!show)
  }

  const clear = () => {
    setShow(!show)
    setAmount('')
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./pic1.jpg')}/>
      
      {/* for debugging */}
      {/* <Text>{amount}</Text>
      <Text>{selectedCurrency}</Text> */}

      <View style={styles.body}>
      <TextInput 
      label="Insert amount"
      keyboardType="numeric"
      style={{width:"30%", borderColor:'gray', borderWidth:1, fontSize: 20, padding: 10,}}
      onChangeText={text => setAmount(text)}
      value={amount}/>

      <Picker
      style={styles.picker}
      selectedValue={selectedCurrency}
      onValueChange={(itemValue, itemIndex) =>{
        console.log(itemValue, itemIndex)
        if(itemIndex!=0){
          setselectedCurrency(itemValue)
        }
      }}
      >
        {/* <Picker.Item label="Java" value="java"/>
        <Picker.Item label="JavaScript" value="js" />
        <Picker.Item label="React-Native" value="rn" />
        <Picker.Item label="Cascading stylesheet" value="css" /> */}
        {/* {Object.getOwnPropertyNames(customData.rates).map((item, index) => {
        return (<Picker.Item label={item} value={index} key={index}/>) 
    })} */}
        {Object.keys(rates).sort().map(key => (<Picker.Item label={key} value={key} key={key}/>))}
      </Picker>
      </View>

      <Pressable
     style={styles.btnContainer}
     onPress={convert}>
     <Text
     style={styles.btn}>Convert to Euros</Text>
     </Pressable>

     <Pressable
     style={styles.btnContainer}
     onPress={clear}>
     <Text
     style={styles.btnRed}>Clear</Text>
     </Pressable>

      {
        show ? (
     <Text style={styles.text}>{amount} {selectedCurrency} in Euros is {result}</Text>
        ): null
    }
      

    </View>
  );


}

const styles = StyleSheet.create({
  container: {
    justifyContent:'center',
    alignItems:'center',
   

  },

  body:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    
  },  

  image:{
   width:"100%",
   height: 400,
   resizeMode:'cover',

  },
  picker:{
    width: "50%",
    backgroundColor: '#118C4F',
    color: 'white',
  },

  btnContainer:{
    alignItems:'center',
    justifyContent:'center',
    marginTop: 10,
  },

  btn:{
    color: 'white',
    width: "80%",
    backgroundColor: '#118C4F',
    textAlign:'center',
    height: 50,
    borderRadius: 4,
    padding: 10,
    fontSize: 18,
  },

  
  btnRed:{
    color: 'white',
    width: "80%",
    backgroundColor: '#f44336',
    textAlign:'center',
    height: 50,
    borderRadius: 4,
    padding: 10,
    fontSize: 18,
  },

  text:{
    fontSize: 24,
    marginTop: 50,
    borderWidth: 2,
    borderColor: '#118C4F',
    borderStyle: "dotted",
    borderRadius: 10,
    padding: 10,
  }

});


