import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCategories,saveCategory } from "../../redux/actions/categoryActions"
import CategoryDetail from "./CategoryDetail";

function AddorUpdateCategory({
    categories,
    getCategories,
    saveCategory,
    history,
    ...props
}) {

    const [category, setCategory] = useState({ ...props.category });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (categories.length === 0) {
            getCategories();
        }
        
        setCategory({ ...props.category });
    }, [props.category]);

    function handleChange(event) {
        const { name, value } = event.target;
       
        setCategory(previousCategory => ({ ...previousCategory,
            [name]:  value
        }))

        setErrors(previosErrors => ({
            ...previosErrors,
            [name] : value === "" ? name+ " Olmalıdır" :  undefined
        }))

        if(name === "categoryName" && getCategoryByName(categories,value))
        {
            setErrors(previosErrors => ({
                ...previosErrors,
                categoryName: "Aynı Category İsmi Daha önceden Eklenmiş"
            }))
        }

    }

    function handleSave(event) {
        event.preventDefault();
        
        if(errors.length > 0)
        {
            alert("Hataları çözmeden kaydedemezsiniz");
            return;
        }

        saveCategory(category).then(() => {
            debugger;
            history.push("/");
        })
    }

    return (
        <CategoryDetail             
        category = {category} 
        onChange = {handleChange}
        onSave = {handleSave}
        errors = {errors}>

        </CategoryDetail>
    );
}

export function getCategoryById(categories, categoryId)
{
    let category = categories.find(p => p.id ===  parseInt(categoryId, 10)) || null;
    return category;
}

export function getCategoryByName(categories, categoryName)
{
    let category = categories.find(p => p.categoryName ===  categoryName) || null;
    return category;
}

function mapStateToProps(state, ownProps) { 
    const categoryId = ownProps.match.params.categoryId;//string geliyormus
    const category = categoryId && state.categoryListReducer.length > 0 ? getCategoryById(state.categoryListReducer, categoryId) : {};

    return {
        category,
        categories: state.categoryListReducer
    }
}

const mapDispacthToProps = {
    getCategories, saveCategory
}

export default connect(mapStateToProps,mapDispacthToProps)(AddorUpdateCategory);