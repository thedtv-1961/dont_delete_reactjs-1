import { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { showProductDetail } from "../actions";

class ProductListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.products.map(product => {
                    return <li key={ product.id } onClick={() => this.props.onClickProductItem(product)}>{ product.name }</li>
                })}
            </ul>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        products: state.products // `store combineReducers` đi từ file index.js -> đến file này chỉ lấy `products`
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            onClickProductItem: showProductDetail
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);
