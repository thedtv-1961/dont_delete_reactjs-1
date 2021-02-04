import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newToDo:{
                is_done: false,
                name: null
            }
        };
    }

    onInputChange(e){
        if(e.target.type === 'checkbox') {
            this.setState({
                newToDo: {
                    ...this.state.newToDo,
                    [e.target.name]: e.target.checked
                }
            });
        } else {
            this.setState({
                newToDo: {
                    ...this.state.newToDo,
                    [e.target.name]: e.target.value
                }
            });
        }
    }

    onSubmitClick(){
        this.props.addNewTodo(this.state.newToDo);
    }

    render(){
        return (<form>
            <table border="1">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type="text" name="name" onChange={(e) => {this.onInputChange(e)}}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>Is done?</td>
                        <td>
                            <input type="checkbox" name="is_done" onChange={(e) => {this.onInputChange(e)}}></input>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button type="button" onClick={() => {this.onSubmitClick()}}>Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>);
    }
} 

const mapStateToProps = (dispatch) => {
    return bindActionCreators({
        addNewTodo: addTodo
    }, dispatch);
}

export default connect(null, mapStateToProps)(TodoFormContainer);
