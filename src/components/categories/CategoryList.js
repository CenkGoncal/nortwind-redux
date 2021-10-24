import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert, Row, Col, ListGroup, ListGroupItem, Button } from "reactstrap";
import { bindActionCreators } from "redux"
import * as categoryAction from "../../redux/actions/categoryActions"
import * as productAction from "../../redux/actions/productAction"
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

class CategoryList extends Component {
    //companent init fonksiyonu
    componentDidMount() {

        this.props.actions.getCategories()
    }

    selectCategory = category => {
        this.props.actions.changeCategory(category);
        this.props.actions.getProducts(category.id);
    }
    
    componentDidCatch(error,info)
    {
        console.log("error:", error);
        console.log("error:", info);
    }

    deleteCategory =(category) => {
        
        this.props.actions.getProducts(category.id).then(response => {
            if(response.payload.length > 0)
            {
                alertify.error("Bu Category ait "+response.payload.length +" product var!!! Category silemezsiniz");
            }
            else
            {
                this.props.actions.deleteCategory(category).then(response => {
                    if(response)
                    {
                        alertify.success(category.categoryName + " silindi");
                        this.props.actions.getCategories();    
                    }
                })
            }
        });
        
    }

    render() {
        return (
            <div>
                <Alert color="warning">
                    <Row>
                        <Col xs="10">
                            Categories
                            <span className="bg-danger text-white">({this.props.categories.length})</span>
                        </Col>
                        <Col xs="2">
                            <Button className="btn btn-success btn-sm float-right" title="Add Categories">
                                <Link to="saveCategory" className="text-white link" >+</Link>
                            </Button>
                        </Col>
                    </Row>
                </Alert >
                <ListGroup>
                    {
                        this.props.categories.map(item => (

                            <ListGroupItem active={this.props.currentCategory.categoryName === item.categoryName}
                                key={item.id} onClick={() => this.selectCategory(item)}>
                                <Row>
                                    <Col xs="8">{item.categoryName}</Col>
                                    <Col xs="4">
                                        <div className="bnt-group">
                                        <Button className="btn btn-warning btn-sm" title="Edit Categories">
                                            <Link to={"saveCategory/"+item.id} className="text-white link" >Edit</Link>
                                        </Button>
                                        <Button className="btn btn-danger btn-sm" title="Remove Categories"
                                                onClick={() => this.deleteCategory(item)} >
                                            X
                                        </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        ))
                    }
                </ListGroup>
            </div>
        )
    }
}

//stateleri redux almak için 
function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer
    }
}

//operasyonları redux almak için
function mapDispacthToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryAction.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryAction.changeCategory, dispatch),
            getProducts: bindActionCreators(productAction.getProducts, dispatch),
            deleteCategory : bindActionCreators(categoryAction.deleteCategory, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispacthToProps)(CategoryList)