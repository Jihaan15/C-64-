
import React from 'react';
import { StyleSheet, Text, View ,TextInput, TouchableOpacity} from 'react-native';
import dictionary from './localDb'




export default class App extends React.Component {
constructor(){
  super()
  this.state={
    word:'',
    lexicalCategory:'',
    defination:[],
    text:'',
    isButtonPressed:false,
    
  }
}

fetchWord=(textDelivery)=>{
  var textDelivery=textDelivery.toLowerCase()

}

  render(){
  return (
    <View style={styles.container}>
      <TextInputBox 
      style={styles.inputBox}
      onChangeText={(text)=>{
     this.setState({
       text:text
     })
      }}
      value={this.state.text}
      />
      <TouchableOpacity onPress={()=>{
        this.setState({
          defination:dictionary[this.state.text].definition
        })
      }} style={styles.button}>
        <Text style={styles.buttonText}>
          search
        </Text>
      </TouchableOpacity>
     <View>
       {this.state.defination.map(item=>{
         return <Text style={styles.displayText}>{item}</Text>
       })}
     </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles = StyleSheet.create(
  {
    inputBox:{
      justifyContent:'center',
      alignItems:'center',
      width:200,
      height:50,
      borderWidth:2,
      borderColor:'black'
    },
    buttonText:{
  textAlign:'center',
  fontWeight:'bold',
  fontSize:15,
  
    },
    button:{
      backgroundColor:'red',
      alignItems:'center',
      width:100,
      height:50,
      justifyContent:'center',
      borderColor:'yellow'
    },
    displayText:{
      textAlign:'center',
      fontSize:15,
      color:'black'
    }
  }
)
