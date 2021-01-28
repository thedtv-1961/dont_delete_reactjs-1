import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import ProductListContainer from "../containers/ProductListContainer";
import ProductDetailContainer from "../containers/ProductDetailContainer";
import ProductFormContainer from "../containers/ProductFormContainer";
import ProductFormDetailContainer from "../containers/ProductFormDetailContainer";
import TodoListContainer from "../containers/TodoListContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/todos">Todo List</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <div>
              <ProductFormDetailContainer />
              <hr/>
              <ProductDetailContainer />
              <hr />
              <ProductListContainer />
            </div>
          </Route>
          <Route path="/form">
            <ProductFormContainer />
          </Route>
          <Route path="/todos">
            <TodoListContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
