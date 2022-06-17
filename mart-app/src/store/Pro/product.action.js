import {
  
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_PRODUCTS_LOADING,
    
    
 } from "./product.types";
 import axios from "axios";

//for Get data here
    export const getProductss = (dispatch) =>{
      dispatch({ type:GET_PRODUCTS_LOADING}); //this time is wating
       return axios 
       .get("https://localhost:8080/menspage")
        .then((r) => {
                setTimeout(() => {
          dispatch({ type:GET_PRODUCTS_SUCCESS , payload:r.data}); //this time success
              },100)
             })

        .catch(() => {
          dispatch({ type:GET_PRODUCTS_ERROR}); //if this time geting error
          })
      }

 
  

