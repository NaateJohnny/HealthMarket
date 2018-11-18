import React, {Component} from 'react';
import {connect} from 'react-redux';

class NewProductPage extends Component{
    render(){
        return(<div className="container">
            
        </div>);
    }
}

function mapStateToProps(state, ownProps){
    return{
        products: state.products
    };
}
export default connect(mapStateToProps)(NewProductPage);