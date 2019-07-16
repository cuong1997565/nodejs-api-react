import { combineReducers } from 'redux';
import persons from './person';
import itemEditing from './itemperson';
import acounts from './acount';
import itemEdittingAcount from './itemAcount';
const appReducers = combineReducers({
persons,
itemEditing,
acounts,
itemEdittingAcount
});
export default appReducers;