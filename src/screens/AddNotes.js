import React , {useState} from 'react'
import {StyleSheet,View} from 'react-native'
import {IconButton,TextInput, FAB} from 'react-native-paper'
 
import Header from '../component/Header'
 
function AddNotes({navigation}) {
    const [noteTitle , setNoteTitle] = useState('');
    const [noteDescription,setNoteDescription] = useState('')

    function onSaveNote(){
        navigation.state.params.addNote({noteTitle,noteDescription});
        navigation.goBack()
    }
    return (
    <>    
    
        <Header titleText = "Add a note"/> 
        <IconButton
    icon = "close"
    size = {50}
    color = 'red'
    onPress = {()=>navigation.goBack()}
    style = {styles.iconButton}
   />
        <View style = {styles.container}> 
           <TextInput 
                label = "Add note title here"
                value = {noteTitle}
                mode = 'outlined'
                onChangeText = {setNoteTitle}
                style = {styles.title}
            /> 
              <TextInput 
                label = "Add note description"
                value = {noteDescription}
                
                onChangeText = {setNoteDescription}
                mode = 'flat'
                multiline
                style = {styles.text}
                scrollEnabled
                returnKeyLabel = 'done'
                blurOnSubmit
            />
            <FAB
             style = {styles.fab}
             small
             label = "Add note"
             icon = 'check'
             disabled = {noteTitle === ''?true : false}
             onPress = {()=>onSaveNote()}
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
    iconButton : {
      backgroundColor :'#219653',
      position : 'absolute',
      right : 0,
      top : 40,
      margin : 10,
      zIndex : 2
    },
    titleContainer : {
        alignItems : 'center',
        justifyContent : 'center',
        flex : 1

    },
    title : {
        fontSize : 24,
        marginBottom : 16
    },
    text : {
        height : 300 ,
        fontSize : 16
    },
    fab : {
        position : 'absolute',
        margin : 20,
        right : 0,
        bottom : 0
    }
    
})
export default AddNotes
