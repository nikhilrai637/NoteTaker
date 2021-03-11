import React , {useState} from 'react'
import {StyleSheet,View,Text,FlatList} from 'react-native'
import {FAB,List} from 'react-native-paper'
import Header from '../component/Header'
import {useSelector , useDispatch} from 'react-redux'
import {addnote,deletenote} from '../reducer/notesApp'
function ViewNotes({navigation}) {

    // const [notes,setNotes] = useState([])
    const notes = useSelector(state => state)
    const dispatch = useDispatch()
     
    const addNote = note => {
         console.log(note)
         dispatch(addnote(note))
    }

    const deleteNote = id => dispatch(deletenote(id))
    return (
    <>
        <Header titleText  = 'Simple Note Taking App' />
        <View style = {styles.container}>
            
                {
                 notes.length === 0 ? (
                    <View style = {styles.titleContainer}>
                   <Text style = {styles.title}>This a view Note</Text>
                   </View>
                ):(
                   <FlatList
                   data = {notes}
                   renderItem = {({item}) =>{
                         console.log(item)
                        
                   }}

                   keyExtractor = {item => item.id.toString()}
                />
                )}
            
            
            <FAB
                style = {styles.fab}
                small
                icon = 'plus'
                label = 'Add new note'
                onPress = {() => navigation.navigate('AddNotes', {addNote}
                )}
             />
        </View>
    </>
        
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#fff',
        paddingVertical : 20,
        paddingHorizontal : 10

    },
    titleContainer : {
        alignItems : 'center',
        justifyContent : 'center',
        flex : 1

    },
    title : {
        fontSize : 20
    },
    fab : {
        backgroundColor : '#219653',
        position : 'absolute',
        margin : 20,
        right : 0,
        bottom : 10
    },
    listTitle : {
        fontSize : 20
    }

})
export default ViewNotes
