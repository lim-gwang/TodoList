import React from 'react'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }
  }

  onChange = e => {
    this.setState({
      text: e.target.value,
    })
  }

  onKeyUp = e => {
    if(e.key !== 'Enter') return;
    if(!e.target.value) return;

    this.props.addTodo(this.state.text);

    this.setState({
      text: '',
    })
  }
  render() {
    return(
        <header className="header">
            <h1>todos</h1>
            <input 
              className="new-todo"
              placeholder="What needs to be done?"
              value={this.state.text}
              onChange={this.onChange}
              onKeyUpCapture={this.onKeyUp}
            />
        </header>
    )
  }
}

export default Header;