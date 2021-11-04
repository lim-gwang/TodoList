import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

function TodoApp() {

  return(
    <section className="todoapp">
        <Header/>
        <Main />
        <Footer/>
    </section>
  )
}

export default TodoApp;