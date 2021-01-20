import * as React from'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import db from '../config'

export default class Read extends React.Component{
    constructor(){
        super();
        this.state={
            allStories : []
        }
    }

    retrieveStories=async()=>{
        var text = this.state.search.toUpperCase()
      var enteredText = text.split("")

      
      if (enteredText[0].toUpperCase() ==='B'){
      const query = await db.collection("story").where('title','==',text).startAfter(this.state.allStories).limit(10).get()
      query.docs.map((doc)=>{
        this.setState({
          allStories: [...this.state.allStories, doc.data()],
        })
      })
    }
      else if(enteredText[0].toUpperCase() === 'S'){
        const query = await db.collection("transactions").where('studentId','==',text).startAfter(this.state.lastVisibleTransaction).limit(10).get()
        query.docs.map((doc)=>{
          this.setState({
            allTransactions: [...this.state.allTransactions, doc.data()],
          })
        })
      }
    }

    searchFilterScreen=async(text)=>{
        var enteredText = text.split("")  
        if (enteredText[0].toUpperCase() ==='B'){
          const transaction =  await db.collection("story").where('title','==',text).get()
          transaction.docs.map((doc)=>{
            this.setState({
              allStories:[...this.state.allStories,doc.data()],
            })
          })
        }
        else if(enteredText[0].toUpperCase() === 'S'){
          const transaction = await db.collection('story').where('author','==',text).get()
          transaction.docs.map((doc)=>{
            this.setState({
              allStories:[...this.state.allStories,doc.data()],
            })
          })
        } 
    }
    render(){
        return(
            <View style={styles.container}>
              <SearchBar
              placeholder="Search a Story"
              onChangeText={value}
              value={this.searchFilterScreen}
              />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
})