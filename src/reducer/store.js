import {createStore} from 'redux'
import noteReducer from './notesApp'


const store = createStore(noteReducer)

export default store