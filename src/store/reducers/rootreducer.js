import authReducer from './authreducer';
import productReducer from './productreducer' 
import { combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer} from 'react-redux-firebase';

const rootReducer=combineReducers({
    auth: authReducer,
    product: productReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer