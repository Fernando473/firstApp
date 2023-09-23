import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

export default function App() {
  
  const [nombre, setNombre]  = useState("Ingrese el nombre")
  const [apellido, setApellido] = useState("Ingrese el apellido")
  const [saludo, setSaludo] = useState("Bienvenido: ")

  const saludar = () => {
    setSaludo(saludo + nombre + apellido)
  }

  return (
    <View style={styles.container}>
      <Text>Nombre</Text>
      <TextInput  style={styles.caja} value={nombre}
      onChangeText={setNombre}
      />

      <Text>Apellido</Text>
      <TextInput style={styles.caja} value={apellido} onChangeText={setApellido}/>
      <Text >{saludo}</Text>
      <Button onPress={saludar} title='Saludar'/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:5
  },
  button:{
    padding: '5px',
    margin:'5px'
  },
  caja:{
    borderColor:"black",
    borderWidth:1,
    paddingTop:5,
    paddingHorizontal:10
  }
});
