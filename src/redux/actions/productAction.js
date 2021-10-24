import * as actionTypes from "./actionTypes"
import axiosInstance from "./axiosConfig"


export function getProductsSuccess(produts)
{
    return {
        type: actionTypes.GET_PRODUCTS_SUCCESS,
        payload: produts
    }
}


export function getProducts(categoryid) {
    return function (dispatch) {
        let url = "/products";
        if(categoryid)
        {
            url = url +"?categoryId="+categoryid;
        }

        return axiosInstance.get(url).then(function(response){
            dispatch(getProductsSuccess(response.data))
        })

/*        return fetch(url)
               .then(response => response.json())
               .then(result => dispatch(getProductsSuccess(result)))*/
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
    return axiosInstance({
        method:product.id ? "PUT":"POST",
        url:"/products/" + (product.id || ""),
        data: product,
        headers:{"content-type":"application/json"}
    }).then(handleresponse)
    .catch(handleError)

    /*
    return fetch("http://localhost:3000/products/" + (product.id || ""),{
        method:product.id ? "PUT":"POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(product)
    }).then(handleresponse)
      .catch(handleError)
    */
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
    if(response.status == 201 || response.status == 200)
    {
        return response.data;
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
    if(response.status == 200)
    {
        return true;
    }

    const error =  await response.text();
    throw new Error(error);
}

export function deleteProductApi(product)
{
    return axiosInstance.delete("/products/"+(product.id),{
        headers:{"content-type":"application/json"}
    }).then(handleResponseRemoved)
    .catch(handleError)

   /* return fetch("http://localhost:3000/products/" + (product.id ),{
        method: "DELETE",
        headers:{"content-type":"application/json"}
    }).then(handleResponseRemoved)
      .catch(handleError)*/
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