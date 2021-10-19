import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions"
import { saveProduct } from "../../redux/actions/productAction"
import ProductDetail from "./ProductDetail";

function AddOrUpdateProduct({
    products,
    categories,
    currentCategory,
    getProducts,
    getCategories,
    saveProduct,
    history,
    ...props
}) {
    const [product, setProduct] = useState({ ...props.product });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (categories.length === 0) {
            getCategories();
        }

        setProduct({ ...props.product });
    }, [props.product]);

    function handleChange(event) {
        const { name, value } = event.target;
       
        setProduct(previousProduct => ({ ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }))

        setErrors(previosErrors => ({
            ...previosErrors,
            [name] : value === "" ? name+ " Olmalıdır" :  undefined
        }))
    }

    function handleSave(event) {
        event.preventDefault();
        saveProduct(product).then(() => {
            history.push("/");
        })
    }

    return (
        <ProductDetail 
            product={product} 
            categories = {categories} 
            onChange = {handleChange}
            onSave = {handleSave}
            errors = {errors}
        >
        </ProductDetail>
    );
};

export function getProductById(products, productId)
{
    let product = products.find(p => p.id ===  parseInt(productId, 10)) || null;
    return product;
}

function mapStateToProps(state, ownProps) { 
    const productId = ownProps.match.params.productId;//string geliyormus
    const product = productId && state.productListReducer.length > 0 ? getProductById(state.productListReducer, productId) 
                    : (state.changeCategoryReducer ? { categoryId : state.changeCategoryReducer.id } : {} ) ;

    return {
        product,
        products: state.productListReducer,
        categories: state.categoryListReducer,
        currentCategory: state.changeCategoryReducer
    }
}

const mapDispacthToProps = {
    getCategories, saveProduct
}

export default connect(mapStateToProps,mapDispacthToProps)(AddOrUpdateProduct);