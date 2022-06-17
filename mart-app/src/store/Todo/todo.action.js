import {
  
    GET_TODOS_SUCCESS,
    GET_TODOS_ERROR,
    GET_TODOS_LOADING,
    
    
 } from "./todo.types";
 import axios from "axios";

//for Get data here
    export const getTodos = (dispatch) =>{
      dispatch({ type:GET_TODOS_LOADING}); //this time is wating
       return axios 
       .get("https://localhost:8080/menspage")
        .then((r) => {
                setTimeout(() => {
          dispatch({ type:GET_TODOS_SUCCESS , payload:r.data}); //this time success
              },100)
             })

        .catch(() => {
          dispatch({ type:GET_TODOS_ERROR}); //if this time geting error
          })
      }

  //for post data from here
  
  // export const addTodo = (dispatch ,payload) =>{
  //   dispatch({ type:ADD_TODO_LOADING}); //this time is wating
  //    return axios 
  //    .post("http://localhost:8080/todos" , payload)
  //     .then((r) => {
  //         dispatch({ type:ADD_TODO_SUCCESS , payload:r.data}); //this time success
  //       })

  //     .catch(() => {
  //       dispatch({ type:ADD_TODO_ERROR }); //if this time geting error
  //       })
  //   }

   //todo App
  

