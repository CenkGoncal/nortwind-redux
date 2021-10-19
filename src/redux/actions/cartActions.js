import * as actionTypes from "./actionTypes"

export function addToCart(cartItem){
    return {
        type: actionTypes.ADD_TO_CARD,
        payload: cartItem
    }
}

export function removeFromCart(product)
{
    return {
        type: actionTypes.REMOVE_FORM_CARD,
        payload: product
    }
}

export function backButtonShowStateCart(isShow)
{

    return {
        type: actionTypes.SHOW_HIDE_BACKBT,
        payload: isShow
    }
}

