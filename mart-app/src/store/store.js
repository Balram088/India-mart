import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose
    } from 'redux';
    

    import { todoReducer } from './Todo/todo.reducer';

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    const rootReducer =combineReducers({
      
        todo:todoReducer,
    });
    
    
    export const store = legacy_createStore(rootReducer ,
        composeEnhancers(applyMiddleware())
        );
    
    