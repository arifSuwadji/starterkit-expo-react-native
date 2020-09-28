import { combineReducers } from 'redux';
import user from './user';
import server from './server';
import icons from './icons';

const reducers = combineReducers({
    user,
    server,
    icons
});

export default reducers;