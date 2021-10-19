import { connect } from "react-redux";
import { Alert, Button, Table } from "reactstrap";
import { bindActionCreators } from "redux";
import React, { Component  } from 'react';
import * as cartAction from "../../redux/actions/cartActions";
import alertify from "alertifyjs";


class CartDetails extends Component {
    
    OnDeleteCart =  (product) => {

        this.props.actions.removeFromCard(product);
        alertify.error(product.productName+" sepetden silindi");
    }
    

    render() {


        return <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {   (this.props.cart.length > 0) ?
                            this.props.cart.map(cartitem => (

                                <tr key={cartitem.product.id}>
                                    <th scope="row">{cartitem.product.productName}</th>
                                    <td>{cartitem.product.unitPrice}</td>
                                    <td>{cartitem.quantity}</td>
                                    <td><Button color="danger" onClick={()=>this.OnDeleteCart(cartitem.product)} >X</Button></td>
                                </tr>
                            ))
                        :
                        <tr>
                            <td colSpan={4}>
                            <Alert color="danger" >
                                Sepetinizde Ürün Bulunmamaktadır
                            </Alert >
                            </td>
                        </tr>
                    }

                </tbody>
            </Table>
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
            removeFromCard: bindActionCreators(cartAction.removeFromCart, dispatch)
        }
    }
}
export default connect(mapStateToProps, mapDispacthToProps)(CartDetails)