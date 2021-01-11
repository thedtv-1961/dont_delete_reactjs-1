import { Component } from "react";
import { connect } from "react-redux";

class ProductDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.product.id);
        return (
            <table>
                <tbody>
                    <tr>
                        <td>id: </td>
                        <td>{ this.props.product.id }</td>
                    </tr>
                    <tr>
                        <td>name: </td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>price: </td>
                        <td>x</td>
                    </tr>
                    <tr>
                        <td>description: </td>
                        <td>x</td>
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
