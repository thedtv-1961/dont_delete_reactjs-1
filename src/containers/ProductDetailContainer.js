import { Component } from "react";
import { connect } from "react-redux";

class ProductDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.product) {
            return(
                <strong>no product seleted</strong>
            );
        }
        return (
            <table>
                <tbody>
                    <tr>
                        <td>id: </td>
                        <td>{ this.props.product.id }</td>
                    </tr>
                    <tr>
                        <td>name: </td>
                        <td>{ this.props.product.name }</td>
                    </tr>
                    <tr>
                        <td>price: </td>
                        <td>{ this.props.product.price }</td>
                    </tr>
                    <tr>
                        <td>description: </td>
                        <td>{ this.props.product.description }</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.productHandle // 
    }
}


export default connect(mapStateToProps)(ProductDetailContainer);
