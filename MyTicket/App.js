import React, { Component } from 'react';
import { Text, StyleSheet, View, StatusBar, FlatList, TextInput } from 'react-native'

let database = [
  { jenis: 'Ekonomi 1', harga: 'Rp.20.000' },
  { jenis: 'Ekonomi 2', harga: 'Rp.25.000' },
  { jenis: 'Ekonomi 3', harga: 'Rp.30.000' },
  { jenis: 'VIP 1', harga: 'Rp.50.000' },
  { jenis: 'VIP 2', harga: 'Rp.100.000' },
  { jenis: 'VIP 3', harga: 'Rp.150.000' }, 
]



export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      data: database
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#0043ca" barStyle="light-content" />

        <View style={styles.kotak}>
          <Text style={styles.teks1}>MyTicket</Text>
          <Text style={styles.sim}> : </Text>
        </View>

        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingLeft: 10,
            marginVertical: 20,
            marginHorizontal: 15,
            borderRadius: 10,
          }}
          onChangeText={text => this.setState({text: text})}
          value={this.state.text}
          placeholder="Masukkan Kata Disini"

        />

        <FlatList
        data={this.state.data}
        renderItem={({ item }) =>
        <View style={styles.flat}>
        <Text style={styles.teks2}>{item.jenis}</Text>
        <Text style={styles.teks3}>{item.harga}</Text>
        <Text style={styles.teks4}> > </Text>
        </View>
        }
        />

      </View>
    );
  }
}

export default App

const styles = StyleSheet.create({
  kotak:{
    padding: 20,
    backgroundColor: '#536dfe',
    elevation: 9,
  },
  sim:{
    color: '#FFFFFF',
    fontSize: 50,
    fontWeight: 'bold',
    position: 'absolute',
    right: 20,
  },
  teks1:{
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30,
  },
  teks2:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  teks3:{
    fontSize: 18,
    marginTop: 3,
  },
  teks4:{
    fontSize: 25,
    position: 'absolute',
    right: 20,
    top: 18,
  },
  flat:{
    backgroundColor: '#8f9bff',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 5, 
    marginHorizontal: 20,
  }  
})
















