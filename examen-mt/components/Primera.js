import React, {Component} from 'react';
import { Text, View, Image, StyleSheet,TextInput, Button} from 'react-native';

export default class Inicio extends Component {


  constructor(props){
    super(props);
    
  }
  

  render(){
  
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',color:'blue',backgroundColor: '#380036' }}>
      <Text style={styles.titulo}> -CYBER-PUNK-SHOP-</Text>
    
       <Image
         source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Cyberpunk_2077_logo.svg/1200px-Cyberpunk_2077_logo.svg.png' }} style={{ width: 400, height: 100 }}/>
 
       <Image source={{uri: 'https://cdn.cdkeys.com/700x700/media/catalog/product/c/y/cyberpunk_3_.jpg'}} style={{width: 400, height: 250,marginRight:50,marginLeft:0,marginBottom: 0}} />
               <Text style={styles.texto}> We've got plenty of cool stuff in store for you right now, and plenty more coming your way. New additions, merch pre-orders, or awesome deals .</Text>
        </View>
    );
    
  }
}

const styles = StyleSheet.create({
  
   titulo: {
    
    marginHorizontal: 5,
     marginTop: 40,
   marginBottom: 15,
     textAlign: 'center',
       color: 'orange',
       backgroundColor: "transparent",
       fontSize: 22,
       fontWeight: 'bold',
    
  }, 
  
    texto: {
    
    marginHorizontal: 5,
     marginTop: 25,
   marginBottom: 0,
     textAlign: 'center',
       color: '#968F8F',
       backgroundColor: "transparent",
       fontSize: 17,
       fontStyle:'bold',
       
    
  }, 
});

function Primera() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',color:'blue',backgroundColor: '#380036' }}>
      <Text style={{ color: 'white',fontWeight: 'bold'}}>Tienda Cyberpunk_2077</Text>
       <Image
         source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Cyberpunk_2077_logo.svg/1200px-Cyberpunk_2077_logo.svg.png',
          method: 'POST',
          headers: {
            Pragma: 'no-cache'
                   },
          body: 'Your Body goes here'
         }}
       style={{ width: 350, height: 100 }}/>
 
       <Image source={{uri: 'https://cdn.cdkeys.com/700x700/media/catalog/product/c/y/cyberpunk_3_.jpg'}}
       style={{width: 400, height: 300}} />
    </View>
  );
}
  