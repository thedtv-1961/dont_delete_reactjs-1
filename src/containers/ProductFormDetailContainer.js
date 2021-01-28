import { Component } from "react";
import { connect } from "react-redux";

class ProductFormDetailContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<table border="1">
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Create date</td>
                    <td>Category</td>
                    <td>Delete flag</td>
                    <td>Tag</td>
                </tr>
                <tr>
                    <td>{this.props.product.name}</td>
                    <td>{this.props.product.price}</td>
                    <td>{this.props.product.description}</td>
                    <td>{this.props.product.create_date}</td>
                    <td>{this.props.product.category}</td>
                    <td>{this.props.product.delete_flag}</td>
                    <td>
                        {this.props.product.tag1}
                        {this.props.product.tag2}
                        {this.props.product.tag3}
                    </td>
                </tr>
            </tbody>
        </table>);
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        product: state.productFormHandle
    }
}

export default connect(mapStateToProps)(ProductFormDetailContainer);
