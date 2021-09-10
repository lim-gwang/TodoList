import React from 'react'
import { Route, Switch } from 'react-router-dom';
import TodoItem from './TodoItem';

class Main extends React.Component {
  
  render() {
    const ActiveTodo = this.props.todos.filter(todo => !todo.done);
    const CompletedTodo = this.props.todos.filter(todo => todo.done);
    return(
        <section className="main">
            <input
              id="toggle-all"
              className="toggle-all" 
              type="checkbox"
              onChange={this.props.allToggle}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
              <Switch>
                <Route exact path="/">
                    {
                      this.props.todos.map(todo => {
                        return ( 
                            <TodoItem
                              key={todo.id}
                              id={todo.id}
                              text={todo.text}
                              done={todo.done}
                              onToggle={this.props.onToggle}
                              delTodo={this.props.delTodo}
                              textChange={this.props.textChange}
                            />
                          )
                        })
                    }
                </Route>
                <Route path="/active">
                    {
                      ActiveTodo.map(todo => {
                        return (
                          <TodoItem
                              key={todo.id}
                              id={todo.id}
                              text={todo.text}
                              done={todo.done}
                              onToggle={this.props.onToggle}
                              delTodo={this.props.delTodo}
                            />
                          )
                      })
                    }
                </Route>
                <Route path="/completed">
                    {
                      CompletedTodo.map(todo => {
                        return (
                          <TodoItem
                              key={todo.id}
                              id={todo.id}
                              text={todo.text}
                              done={todo.done}
                              onToggle={this.props.onToggle}
                              delTodo={this.props.delTodo}
                            />
                          )
                        })
                      }
                </Route>
                <Route>
                      <li>
                        <div className="view">
                            Error! <br/>
                            No Match..
                        </div>
                      </li>
                </Route>
              </Switch>
            </ul>
        </section>
    )
  }
}

export default Main;