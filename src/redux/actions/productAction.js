import * as actionTypes from "./actionTypes"


export function getProductsSuccess(produts)
{
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: produts
    }
}


export function getProducts(categoryid) {
    return function (dispatch) {
        let url = "http://localhost:3000/products";
        if(categoryid)
        {
            url = url +"?categoryId="+categoryid;
        }

        return fetch(url)
               .then(response => response.json())
               .then(result => dispatch(getProductsSuccess(result)))
    }
}


export function createProductSuccess(product)
{
    return {type:actionTypes.CREATE_PRODUCT_SUCCESS,payload: product}
}

export function updateProductSuccess(product)
{
    return {type:actionTypes.UPDATE_PRODUCT_SUCCESS,payload: product}
}

export function saveProductApi(product)
{
    return fetch("http://localhost:3000/products/" + (product.id || ""),{
        method:product.id ? "PUT":"POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(product)
    }).then(handleresponse)
      .catch(handleError)
}

export function saveProduct(product)
{
    return function(dispatch) {
        return saveProductApi(product).then(savedProduct=>{
            product.id ? dispatch(updateProductSuccess(savedProduct)) : 
                         dispatch(createProductSuccess(savedProduct))
        })
    }
}

export async function handleresponse(response)
{
    if(response.ok)
    {
        return response.json();
    }

    const error =  await response.text();
    throw new Error(error);
}

export function handleError(error)
{
    console.error("Bir Hata Oluştu"+ error.text());
    throw error;
}

export async function handleResponseRemoved(response)
{
    if(response.ok)
    {
        return true;
    }

    const error =  await response.text();
    throw new Error(error);
}

export function deleteProductApi(product)
{
    return fetch("http://localhost:3000/products/" + (product.id ),{
        method: "DELETE",
        headers:{"content-type":"application/json"}
    }).then(handleResponseRemoved)
      .catch(handleError)
}

export  function deleteProductSuccess(product)
{
    return {type:actionTypes.REMOVE_PRODUCT_SUCCESS,payload: product}
}


export function deleteProduct(product)
{
    return function(dispatch) {
        return deleteProductApi(product).then(result =>  dispatch(deleteProductSuccess(result)))
    }
}