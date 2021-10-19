import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class BackButton extends Component {
    render() { 
        return <div>
           <Button hidden={this.props.isShow} color="info" size="sm"><Link to={"/"}>  Geri </Link></Button> 
        </div>;
    }
}

function mapStateToProps(state) {
   
    return {
            isShow: state.changeBackBtRedurcer
    }
}


export default connect(mapStateToProps)(BackButton)
