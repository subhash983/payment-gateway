import CardReducer from './cardReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({savedCards: CardReducer});

export default rootReducer;
