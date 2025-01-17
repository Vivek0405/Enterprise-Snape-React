import rotateReducer from "./reducers/selectCollectionReducers";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from './reducers/index'

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers())

export default store;