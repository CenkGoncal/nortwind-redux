import React, { Component } from "react";
import { connect } from "react-redux";
import { Alert, Button, Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productAction from "../../redux/actions/productAction"
import * as cardAction from "../../redux/actions/cartActions"
import alertify from "alertifyjs"
import { Link } from "react-router-dom";

class ProductList extends Component {
    componentDidMount() {

        this.props.actions.getProducts(this.props.currentCategory.id);
        this.props.actions.backButtonShowStateCart(true);
    }

    addToCard = (product) => {
        this.props.actions.addToCard({ quantity: 1, product: product });
        alertify.success(product.productName + " sepete eklendi");
    }

    removeFromProduct = (product) => {
        this.props.actions.removeFromProduct(product).then(result => {
            if (result.payload) {
               
                alertify.success(product.productName + " silindi");
                this.props.actions.getProducts(this.props.currentCategory.id);
            }
        });

    }

    render() {
        return (
            <div>
                <Alert color="warning">
                    {this.props.currentCategory.categoryName}
                </Alert >
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>categoryId</th>
                            <th>productName</th>
                            <th>quantityPerUnit</th>
                            <th>unitPrice</th>
                            <th>unitsInStock</th>
                            <th color="success">add To Card</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.products.map(item => (
                                <tr key={item.id}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.categoryId}</td>
                                    <td>
                                        <Link className="link" to={"/saveProduct/" + item.id}>{item.productName}</Link>
                                        <span style={{float: "right"}}>
                                            <Button color="danger" size="sm" onClick={(e) => this.removeFromProduct(item)}>x</Button>
                                        </span>

                                    </td>
                                    <td>{item.quantityPerUnit}</td>
                                    <td>{item.unitPrice}</td>
                                    <td>{item.unitsInStock}</td>
                                    <td>
                                        <Button color="success" size="sm" onClick={(e) => this.addToCard(item)}>+</Button>

                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </Table>
            </div>
        )
    }
}

//stateleri redux almak için 
function mapStateToProps(state) {
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer
    }
}

//operasyonları redux almak için
function mapDispacthToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productAction.getProducts, dispatch),
            addToCard: bindActionCreators(cardAction.addToCart, dispatch),
            backButtonShowStateCart: bindActionCreators(cardAction.backButtonShowStateCart, dispatch),
            removeFromProduct: bindActionCreators(productAction.deleteProduct, dispatch),
        }
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(ProductList)