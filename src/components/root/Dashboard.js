import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import CategoryList from "../categories/CategoryList";
import ProductList from "../product/ProductList";

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col sm="3" >
                        <CategoryList></CategoryList>
                    </Col>
                    <Col sm="9" >
                        <ProductList></ProductList>
                    </Col>
                </Row>
            </div>
        )
    }
}