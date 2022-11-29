/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
//import {item} from 'react-native-paper/lib/typescript/components/List/List';

//3. Función Nombre
const nombre = nombreRecibido => {
  return <Text style={styles.texto}>{nombreRecibido} </Text>;
};

//7.8 Condicional.
const estilo = 'florida';
const isAdmin = true;

// 10. ES un array. Cada campo del array tiene 3 valores. Lo recorremos con un map.

const modulos2Dam = [
  {nombre: 'DIN', profesor: 'Manel', horas: 120},
  {nombre: 'ADA', profesor: 'Juanmi', horas: 120},
  {nombre: 'PMDM', profesor: 'Fran', horas: 100},
  {nombre: 'PSP', profesor: 'Fran', horas: 60},
  {nombre: 'SGE', profesor: 'Belén', horas: 100},
  {nombre: 'Inglés', profesor: 'Caterina', horas: 40},
  {nombre: 'EIE', profesor: 'Manuel', horas: 60},
];

//4. Función Datos
const Datos = () => {
  return (
    <View style={estilo === 'florida' ? styles.florida : styles.upv}>
      <TextInput
        placeholder="Texto"
        label="Etiqueta"
        left={<TextInput.Icon name="account-arrow-right" />}
        placeholderTextColor={estilo === 'florida' ? 'white' : 'red'}
      />
    </View>
  );
};

//9. Función botón
const mostrarBotonInformes = () => {
  return (
    <Button icon="format-list-bulleted" mode="contained">
      {'INFORMES'}
    </Button>
  );
};

class App extends Component {
  render() {
    return (
      <>
        {nombre('Arturo')}
        {Datos()}
        {nombre('Elvira')}
        {Datos()}
        {isAdmin && mostrarBotonInformes()}
        <ScrollView>
          {modulos2Dam.map((item, pos) => {
            return (
              <View
                style={pos % 2 === 0 ? styles.pares : styles.impares}
                key={pos}>
                <Text>{pos}</Text>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>
                  {item.nombre}
                </Text>
                <Text>{item.profesor}</Text>
                <Text>{item.horas}</Text>
              </View>
            );
          })}
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  impares: {
    backgroundColor: '#F8BBD0',
  },
  pares: {
    backgroundColor: '#F48FB1',
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  caja: {
    borderColor: 'red',
    borderWidth: 2,
    fontSize: 20,
  },
});

export default App;
