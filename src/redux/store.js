import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import Reducer from "./reducer";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    storage: AsyncStorage,
    key: 'main',
}
const persistedReducer = persistReducer(persistConfig,Reducer )

export const store = createStore(persistedReducer,applyMiddleware(thunk))
export const persistor = persistStore(store)

