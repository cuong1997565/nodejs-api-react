import { combineReducers } from 'redux';
import persons from './person';
import itemEditing from './itemperson';
import acounts from './acount';
const appReducers = combineReducers({
persons,
itemEditing,
acounts
});
export default appReducers;