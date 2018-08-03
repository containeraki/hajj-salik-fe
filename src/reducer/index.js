import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import coursesReducer from './coursesReducer';
import selectedCourseReducer from './selectedCourseReducer';
import authorReducer from './authorReducer';
import apiReducer from './apiReducer';
import shipmentsReducer from './shipmentsReducer';

export default combineReducers({
    coursesReducer,
    shipmentsReducer,
    selectedCourseReducer,
    authorReducer,
    apiReducer,
    form: formReducer    
});


