import React from "react";
import { Alert } from "reactstrap";
import TextInput from "../toolbox/TextInput";
import SelectInput from "../toolbox/SelectInput";

const ProductDetail = ({categories, product, onSave, onChange, errors}) => {
    return (
        <form onSubmit={onSave}>
            <Alert className={"alert" + product.id ? " alert-info" : " alert-success"}>{product.id ? "Product Güncelle" : "Product Ekle"}</Alert>
            <TextInput name="productName" label="Ürün İsmi" value={product.productName} onChange={onChange} error = { errors.productName } >
            </TextInput>
            
            <SelectInput name="categoryId" 
                         label="category" 
                         value={product.categoryId || ""} 
                         defultOption="Seçiniz"
                         options = {categories.map(c=>({
                             value:c.id,
                             text:c.categoryName
                         }))}
                         onChange = {onChange}
                         error = { errors.categoryId }
            >
            </SelectInput>

            
            <TextInput name="quantityPerUnit" label="Quantity Per Unit" value={product.quantityPerUnit} onChange={onChange} error = { errors.quantityPerUnit } >
            </TextInput>

            <TextInput name="unitPrice" label="Unit Price" value={product.unitPrice} onChange={onChange} error = { errors.unitPrice } >
            </TextInput>

            <TextInput name="unitsInStock" label="Units In Stock" value={product.unitsInStock} onChange={onChange} error = { errors.unitsInStock } >
            </TextInput>
            
            <button type="submit" className="btn btn-success">Save</button>
        </form>
    );
}

export default ProductDetail;