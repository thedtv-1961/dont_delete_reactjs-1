import { Component } from "react";
import { connect } from "react-redux";

class ProductListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.products.map(product => {
                    return <li key={ product.id }>{ product.name }</li>
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

export default connect(mapStateToProps)(ProductListContainer);
