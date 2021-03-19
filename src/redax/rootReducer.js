import {combineReducers} from 'redux';
import {AccessTokenReducer} from './auth/reducer';
import InterfaceReducer from './interface/reducer';
import AlbumsReducer from './albums';

export const rootReducer = combineReducers({
  interface: InterfaceReducer,
  token: AccessTokenReducer,
  loading: AccessTokenReducer,
  auth: AccessTokenReducer,
  albums: AlbumsReducer,
});
