import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTodo } from '../actions';

class TodoListContainer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (<div>
            <h4>Todo List</h4>
            <button type="button" onClick={() => this.props.loadTodo()}>fetch</button>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Is done?</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.todos.map((todo, index) => {
                        return(
                            <tr>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>);
    }
}

const mapStateToProps = (state, ownProp) => {
    return {
        todos: state.todoReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadTodo: fetchTodo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
