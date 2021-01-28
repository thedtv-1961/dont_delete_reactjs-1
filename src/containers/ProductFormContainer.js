import { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addNewProduct } from "../actions";

class ProductFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    id: 1,
                    name: 'T-Shirt'
                },
                {
                    id: 2,
                    name: 'Men Shirt'
                },
                {
                    id: 3,
                    name: 'Pains'
                },
            ]
        };
    }

    handleChange = (e) => {
        if(e.target.type === 'checkbox' && (e.target.name === 'tag1' || e.target.name === 'tag2' || e.target.name === 'tag3')) {
            this.setState({
                product: {
                    ...this.state.product,
                    [e.target.name] : e.target.checked ? e.target.value : null
                }
            });
        } else {
            this.setState({
                product:{
                    ...this.state.product,
                    [e.target.name] : e.target.value
                }
            });
        }
    }

    render() {
        return (<form>
            <h4>Form:</h4>
            <table border="1">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type="text" name="name" onChange={(e) => {this.handleChange(e)}}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>
                            <input type="text" name="price" onChange={(e) => {this.handleChange(e)}}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>
                            <textarea name="description" onChange={(e) => {this.handleChange(e)}}></textarea>
                        </td>
                    </tr>
                    <tr>
                        <td>Create date</td>
                        <td>
                            <input type="datetime-local" name="create_date" onChange={(e) => {this.handleChange(e)}}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>
                            <select name="category" onChange={(e) => {this.handleChange(e)}}>
                                {this.state.categories.map(item => {
                                    return (<option key={item.id} value={item.id}>{item.name}</option>)
                                })}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Delete flag</td>
                        <td>
                            <input type="radio" name="delete_flag" id="delete_yes" value="0" onChange={(e) => {this.handleChange(e)}} />
                            <label htmlFor="delete_yes">Yes</label>
                            <input type="radio" name="delete_flag" id="delete_no" value="1" onChange={(e) => {this.handleChange(e)}} />
                            <label htmlFor="delete_no">No</label>
                        </td>
                    </tr>
                    <tr>
                        <td>Tag</td>
                        <td>
                            <input type="checkbox" id="tag1" name="tag1" value="tag1" onChange={(e) => {this.handleChange(e)}} />
                            <label htmlFor="tag1"> #tag1</label>
                            <input type="checkbox" id="tag2" name="tag2" value="tag2" onChange={(e) => {this.handleChange(e)}} />
                            <label htmlFor="tag2"> #tag2</label>
                            <input type="checkbox" id="tag3" name="tag3" value="tag3" onChange={(e) => {this.handleChange(e)}} />
                            <label htmlFor="tag3"> #tag3</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="button" onClick={() => this.props.onClickSubmit(this.state.product)}>Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <hr></hr>
            <h4>Preview:</h4>
            <table border="1">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            {this.state.name}
                        </td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>
                            {this.state.price}
                        </td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>
                            {this.state.description}
                        </td>
                    </tr>
                    <tr>
                        <td>Create date</td>
                        <td>
                            {this.state.create_date}
                        </td>
                    </tr>
                    <tr>
                        <td>Category</td>
                        <td>
                            {this.state.category}
                        </td>
                    </tr>
                    <tr>
                        <td>Delete flag</td>
                        <td>
                            {this.state.delete_flag}
                        </td>
                    </tr>
                    <tr>
                        <td>Tag</td>
                        <td>
                            {this.state.tag1}
                            {this.state.tag2}
                            {this.state.tag3}
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>);       
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        {
            onClickSubmit: addNewProduct
        },
        dispatch
    );
}

export default connect(null, mapDispatchToProps)(ProductFormContainer);
