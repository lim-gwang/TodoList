import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

let count = 1;

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allCheck: false,
      todos: [
        {
          id: count,
          text: '싸발적이고 ㄹㅇㅋㅋ',
          done: true,
        }
      ]
    }

  }

  // 1. 아이템 추가

  addTodo = text => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: ++count,
          text,
          done: false,
        }
      ]
    });
  }

  // 2. 아이템 체크 토글
  onToggle = id => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }

      return todo;
    });

    this.setState({ todos });
  }

  // 3. 아이템 삭제
  delTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({
      todos,
    });
  }

  // 4. 전체 토글 체크
  allToggle = () => {
    const done = !this.state.allCheck;

    const todos = this.state.todos.map(todo => {
      return {
        ...todo,
        done,
      };
    })

    this.setState({ 
      allCheck: done,
      todos: todos,
    });
        
  }
  
  // 6. 전체 아이템 삭제
  comDel = () => {
    const todos = this.state.todos.filter(todo => !todo.done);

    this.setState({
      todos,
    });
  }

  render() {

    const leftItems = this.state.todos.filter(todo => !todo.done).legnth;

    return(
      <section className="todoapp">
        <Header
          addTodo={this.addTodo}
        />
        <Main
          todos={this.state.todos}
          onToggle={this.onToggle}
          delTodo={this.delTodo}
          allToggle={this.allToggle}
        />
        <Footer
          leftItems={leftItems}
          comDel={this.comDel}
        />
    </section>
    )
  }
}

export default TodoApp;