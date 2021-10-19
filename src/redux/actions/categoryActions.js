import * as actionTypes from "./actionTypes"

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
        let url = "http://localhost:3000/categories";
     
        return fetch(url)
               .then(response => response.json())
               .then(result => dispatch(getCategoriesSuccess(result)))
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
    return fetch("http://localhost:3000/categories/" + (category.id || ""),{
        method:category.id ? "PUT":"POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(category)
    }).then(result => handleresponse(result,false))
      .catch(handleError)
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
    if(response.ok)
    {
        return isDelete ? true : response.json();
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
    return fetch("http://localhost:3000/categories/" + (category.id ),{
        method: "DELETE",
        headers:{"content-type":"application/json"}
    }).then(result => handleresponse(result,true))
      .catch(handleError)
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