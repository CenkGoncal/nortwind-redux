import React  from "react";
import { Alert } from "reactstrap";
import TextInput from "../toolbox/TextInput";

const CategoryDetail = ({ category, onSave, onChange, errors }) => {
    return (
        <form onSubmit={onSave}>
            <Alert className={category.id ? "alert alert-warning" : "alert alert-success"}>{category.id ? "Güncelle" : "Ekle"}</Alert>

            <TextInput name="categoryName" label="Category Name" value={category.categoryName} onChange={onChange} error = { errors.categoryName } >
            </TextInput>

            <TextInput name="seoUrl" label="Seo Url" value={category.seoUrl} onChange={onChange} error = { errors.seoUrl } >
            </TextInput>

            <button type="submit" className="btn btn-success">Save</button>
        </form>
    );
}
export default CategoryDetail;