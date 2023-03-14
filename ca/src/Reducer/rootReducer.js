import { combineReducers } from 'redux';
import countries from './country.reducer';

const rootReducer = combineReducers({
    flag: countries
});

export default rootReducer;