import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTodo } from '../actions';

class TodoListContainer extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.loadTodo();
    }

    render(){
        return (<div>
            <h4>Todo List</h4>
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
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.name}</td>
                                <td>[{todo.is_done ? '+' : '-'}]</td>
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
