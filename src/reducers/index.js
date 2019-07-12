import { combineReducers } from 'redux';
import persons from './person';
import itemEditing from './itemperson';
const appReducers = combineReducers({
persons,
itemEditing
});
export default appReducers;