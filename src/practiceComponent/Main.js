import React from 'react'
import { Route } from 'react-router-dom';
import TodoItem from './TodoItem';

class Main extends React.Component {
  render() {
    const ActiveTodo = this.props.todos.filter(todo => todo.done === false);
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
                <Route exact={true} path="/">
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
            </ul>
        </section>
    )
  }
}

export default Main;