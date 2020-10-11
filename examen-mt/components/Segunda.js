import React, { Component } from 'react';
import { View, StyleSheet, Text, Linking, TextInput,TouchableOpacity } from 'react-native';
import Communications from 'react-native-communications';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile_no: '5536553242',
      emails:'zmdvelazquez@gmail.com'
    };
  }
  render() {
    return (
      <View style={styles.container}>
       <Text style={styles.titulo}> -CYBER-PUNK-SHOP-</Text>
      <Text style={styles.text2}> Envia WhatsApp o Mandanos Correo</Text>
          <Text>{"\n"}</Text>

 <Text style={styles.text2}>Teléfono</Text>
       <TextInput
         value={this.state.mobile_no}
         onChangeText={(mobile_no) => this.setState({ mobile_no })}
         style={styles.text2}
       />
       <Text>{"\n"}</Text>

       <TouchableOpacity 
          style = {styles.button}
          onPress={() => Communications.phonecall(this.state.telefono, true)}>
            <Text style={styles.text}>
              Enviar WhatsApp
            </Text>
        </TouchableOpacity>
      <Text>{"\n"}</Text>
       <Text style={styles.text2}>E-mail</Text>
       <TextInput
         value={this.state.emails}
         onChangeText={(emails) => this.setState({  emails  })}
         style={styles.text2}
    
       />
<Text>{"\n"}</Text>
 
        <TouchableOpacity 
          style = {styles.button}
          onPress={() => Communications.email(this.state.emails.split(',') ,null,null)}>
            <Text style={styles.text}>
              Enviar Correo
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',color:'blue',backgroundColor: '#005076',
    marginTop:50,
    paddingTop: 30,
  },
   titulo: {
    
    marginHorizontal: 5,
     marginTop: 40,
   marginBottom: 15,
     textAlign: 'center',
       color: 'tomato',
       backgroundColor: "transparent",
       fontSize: 22,
       fontWeight: 'bold',
    
  },
    text2: {
    
    marginHorizontal: 0,
     marginTop: 5,
        marginBottom: 0,
     textAlign: 'center',
       color: 'white',
       backgroundColor: "transparent",
       fontSize: 20,
       fontStyle:'bold',
       
    
  },  
    button: {
    justifyContent: 'center',
    width : 300,
    backgroundColor: 'green',
    marginTop : 10,
  },
 text: {
    fontSize: 18,
    textAlign : 'center',
    padding : 10,
    color : 'white',
  },
 
});
