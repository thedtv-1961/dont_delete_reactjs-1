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
            {this.props.dataTodo.is_loading
            ? <div>
                <p>Data's loading...</p>
                <i>{this.props.dataTodo.error}</i>
            </div>
            : <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Is done?</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.dataTodo.data.products.map(item => {
                        return (<tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>[{item.is_done ? '-' : '+'}]</td>
                        </tr>)
                    })}
                </tbody>
            </table>
            }
        </div>);
    }
}

const mapStateToProps = (state, ownProp) => {
    return {
        dataTodo: state.todoReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loadTodo: fetchTodo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer);
