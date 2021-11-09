import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';


export default function App() {


  const [selectedLanguage, setSelectedLanguage] = useState();
  const customData = require('./sampleData.json');
  console.log(Object.keys(customData));

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./pic1.jpg')}/>

      

      <Picker
        ref={pickerRef}
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  image:{
   width: 200,
   height: 200,
   resizeMode:'cover',
  }
});
