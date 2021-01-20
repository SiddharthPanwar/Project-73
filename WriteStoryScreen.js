import * as React from'react'
import { StyleSheet, Text, View, Image, Header, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import firebase from 'firebase'
import db from '../config'

export default class Write extends React.Component{
    constructor(){
        super();
        this.state={
            title : '',
            author : '',
            story : ''
        }
    }
    submitStory=async()=>{
        db.collection("story").add({
            'author': this.state.author
        })
        db.collection("story").add({
            'title' : this.state.title
        })
        db.collection("story").add({
            'story' : this.state.story
        })
        this.setState({
            title : '',
            author : '',
            story : ''
        })
    }
    render(){
        return(
            <KeyboardAvoidingView
      style ={styles.header}
      behavior="padding" enabled>
      <Text style={
      styles.text
      }>
      Story Hub
      </Text>
      <View>
          <TextInput style={styles.inputBox} placeholder="Story Title"
          value={value}>
          </TextInput>
          <TextInput style={styles.inputBox} placeholder="Author"
          value={value}>
          </TextInput>
          <TextInput style={styles.storyBox} placeholder="Write Your Story"
          value={value} multiline={true}>
          </TextInput>
      </View>
      <View>
          <TouchableOpacity
          onPress={this.submitStory,
            ToastAndroid.show(transactionMessage,ToastAndroid.SHORT)}>
              <Text>
                  SUBMIT
              </Text>
          </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    header :{
      backgroundColor : 'blue'
  },
  text : {
  color:"pink",
  padding:50,
  fontFamily:'',
  fontSize:20,
  fontWeight:'bold',
  textAlign:'center'
  },
  inputBox:{
    width : 200,
    height  :40,
    borderWidth : 1.5,
    borderRightWidth : 0,
    fontSize : 20
},
storyBox:{
    width : 200,
    height  :100,
    borderWidth : 1.5,
    borderRightWidth : 0,
    fontSize : 20
},
})