import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';

export default function Contador() {
  
  const [contador,setContador] =useState(0)
  
  const increase = () => {
   setContador(contador +1) 
  }

  const decrease = () => {
    if(contador >0 )
      setContador(contador - 1)
    else{
      Alert.alert('Informacion', 'Ya no puedes decrementar')
    }
  }

  return (
    <View style={styles.container}>
      <Text>{contador}</Text>
      <StatusBar style="auto" />
      <Button title='Incrementar' styles={styles.button} onPress={increase}/>
      <Button  title='Decrementar' styles={styles.button} onPress={decrease}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    padding: '5px',
    margin:'5px'
  }
});
