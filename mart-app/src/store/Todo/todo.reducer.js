import {

    
    GET_TODOS_ERROR,
    GET_TODOS_LOADING,
    GET_TODOS_SUCCESS,
    

} from './todo.types';


const initalState = {
  

  getTodos:{
    loading : false,
    error: false,
    data:[],
  }
       
};


export const todoReducer = (state = initalState, {type , payload}) => {
    switch (type) {
        case GET_TODOS_LOADING:{
            return {
                ...state,
                getTodos:{
                    ...state.addTodo,
                    loading: true,
                },
             };
        }
        case GET_TODOS_SUCCESS: {
            return {
                ...state,
               getTodos: {
                   ...state.getTodos,
                 loading:false,
                data:payload,
               }
            }
        }
        
        case GET_TODOS_ERROR:{
            return {
                ...state,
              getTodos: 
              {
                  ...state.getTodos,
                  loading:false,
                error:true,
            }
        }
    }
         
   
       default:{
           return state;
    
   }
    }
}