import React, { Component } from "react";
import { connect } from "react-redux";
import {bindActionCreators} from "redux"
import * as categoryAction from "../../redux/actions/categoryActions"

class CategoryList extends Component
{
    //companent init fonksiyonu
    componentDidMount()
    { 
      
        this.props.actions.getCategories()
    }

    render(){
        return(
            <div>
                <h3>Category {this.props.categories.length}</h3>
                <h5>{this.props.currentCategory.categoryName}</h5>
            </div>
        )
    }
}

//stateleri redux almak için 
function mapStateToProps(state)
{
    return {
        currentCategory : state.changeCategoryReducer,
        categories : state.categoryListReducer
    }
}

//operasyonları redux almak için
function mapDispacthToProps(dispatch)
{
    return{
        actions:{
            getCategories: bindActionCreators(categoryAction.getCategories,dispatch)
        }
    }
}


export default connect(mapStateToProps,mapDispacthToProps)(CategoryList)