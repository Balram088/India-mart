import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
    compose
    } from 'redux';
    

    import { ProductReducer } from './Pro/product.reducer';

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
    const rootReducer =combineReducers({
      
        product:ProductReducer,
    });
    
    
    export const store = legacy_createStore(rootReducer ,
        composeEnhancers(applyMiddleware())
        );
    
    