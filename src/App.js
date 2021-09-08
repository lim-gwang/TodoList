import React, { Component } from 'react'
// import Test from './Test';
// import Home from './Home';
// import Compo from './Compo';
// import Actvie from './Active';

import TodoApp from './practiceComponent/TodoApp'
// import TodoApp from './component/TodoApp'

// class App extends Component {
//   render() {
// 	  return <>
//       <TodoApp />
//       <footer className="info">
//         <p>Double-click to edit a todo</p>
//         <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
//         <p>Created by <a href="http://todomvc.com">you</a></p>
//         <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
//       </footer>
//     </>
//   }
// }

class App extends Component {
  render() {
	  return <>
      <TodoApp />
      <footer className="info">
          <p>Double-click to edit a todo</p>
          <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
          <p>Created by <a href="http://todomvc.com">you</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </>
  }
}

export default App