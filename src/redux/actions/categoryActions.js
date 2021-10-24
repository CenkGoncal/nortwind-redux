//import axios from "axios";
import * as actionTypes from "./actionTypes"
import axiosInstance from "./axiosConfig"

export function changeCategory(category) {
    return {
        type: actionTypes.CHANGE_CATEGORY,
        payload: category
    }
}

export function getCategoriesSuccess(categories)
{
    return {
        type: actionTypes.GET_CATEGORIES_SUCCESS,
        payload: categories
    }
}


export function getCategories() {
    return function (dispatch) {
        let url = "/categories";
     
        return axiosInstance.get(url).then(function(response){
            dispatch(getCategoriesSuccess(response.data))
        }).catch(handleError);

   //     return fetch(url)
   //            .then(response => response.json())
   //            .then(result => dispatch(getCategoriesSuccess(result)))
    }
}

export function createCategorySuccess(product)
{
    return {type:actionTypes.CREATE_CATEGORIES_SUCCESS,payload: product}
}

export function updateCategorySuccess(product)
{
    return {type:actionTypes.UPDATE_CATEGORIES_SUCCESS,payload: product}
}


export function saveCategoryApi(category)
{
    return axiosInstance({
        method:category.id ? "PUT":"POST",
        url:"/categories/" + (category.id || ""),
        data: category,
        headers:{"content-type":"application/json"}
    }).then(function(result){
        handleresponse(result,false);
    }).catch(handleError);
    
  /*  return fetch("http://localhost:3000/categories/" + (category.id || ""),{
        method:category.id ? "PUT":"POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(category)
    }).then(result => handleresponse(result,false))
      .catch(handleError)*/
}

export function saveCategory(category)
{
    return function(dispatch) {
        return saveCategoryApi(category).then(savedCategory=>{
            category.id ? dispatch(updateCategorySuccess(savedCategory)) : 
                          dispatch(createCategorySuccess(savedCategory))
        })
    }
}

export async function handleresponse(response,isDelete)
{
    if(response.status == 201 || response.status == 200)
    {
        return isDelete ? true : response.data;
    }

    const error =  await response.text();
    throw new Error(error);
}

export function handleError(error)
{
    console.error("Bir Hata Oluştu"+ error.text());
    throw error;
}

export function deleteCategoryApi(category)
{

    return axiosInstance.delete("/categories/" + (category.id ),{
        headers:{"content-type":"application/json"}
    }).then(function(response){
        console.log(response);

        handleresponse(response,true);
    }).catch(handleError);

/*
    return fetch("http://localhost:3000/categories/" + (category.id ),{
        method: "DELETE",
        headers:{"content-type":"application/json"}
    }).then(result => handleresponse(result,true))
      .catch(handleError) */
}

export function deleteCategorySuccess(state)
{
    return {type:actionTypes.REMOVE_CATEGORIES_SUCCESS,payload: state}
}

export function deleteCategory(category)
{
    return function(dispatch) {
        return deleteCategoryApi(category).then(result => dispatch(deleteCategorySuccess(result)))   
    }
}