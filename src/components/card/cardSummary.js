import alertify from 'alertifyjs';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Alert, Button, Col, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, Row, UncontrolledDropdown } from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as cartAction from "../../redux/actions/cartActions";

class CartSummary extends Component {
    renderEmpty() {
        return (
            <NavItem>
                <NavLink>Sepetiniz Boş</NavLink>
            </NavItem>
        )
    }

    removeCard = (product) => {
        this.props.actions.removeFromCard(product);
        alertify.error(product.productName + " sepetden silindi");
    }

    componentDidMount()
    {
        this.props.actions.backButtonShowStateCart(false);
    }
      
    renderSummary() {

        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    {this.props.cart.length}' ürün Ekli
                </DropdownToggle>
                <DropdownMenu right>
                    {   
                        this.props.cart.map(cartitem => (

                            <DropdownItem key={cartitem.product.id} >
                                <Row>
                                    <Col xs="2">
                                        <Button color="danger" size="sm" onClick={(e) => this.removeCard(cartitem.product)}>X</Button>
                                    </Col>
                                    <Col xs="10">
                                        <Alert color="primary">{cartitem.product.productName} {cartitem.quantity}</Alert>
                                    </Col>
                                </Row>

                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to="/cart"> Sepete Git </Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    render() {
        return <div>
            {
                this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()
            }

        </div>;
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

//operasyonları redux almak için
function mapDispacthToProps(dispatch) {
    return {
        actions: {
            removeFromCard: bindActionCreators(cartAction.removeFromCart, dispatch),
            backButtonShowStateCart : bindActionCreators(cartAction.backButtonShowStateCart, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispacthToProps)(CartSummary)