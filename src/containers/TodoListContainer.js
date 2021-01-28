import { Component } from 'react';

class TodoListContainer extends Component {
    constructor(props){
        super(props);
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
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>);
    }
}

export default TodoListContainer;
