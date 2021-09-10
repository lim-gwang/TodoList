import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      className : false,
      newText : this.props.text,
    }
  }

  onDbClick = () => {
    
    this.setState(
      {
        className: !this.state.className,
      }
    )
  }
  onKeyUp = (e) => {

    if(e.key !== 'Enter') return;

    if(!this.state.newText) {
      this.props.delTodo(this.props.id);
    }

    this.setState(
      {
        className: false,
      }
    )

    this.props.textChange(this.props.id, this.state.newText)
  }

  onChange = e => {
    this.setState({
      newText : e.target.value,
    })
  }

  render() {
    const { id, done, text, delTodo, onToggle } = this.props;
    return (
        <li 
          className={done? 'completed' : '' + (this.state.className? 'editing' : '')}
        >
              <div className="view">
                  <input 
                    className="toggle"
                    type="checkbox"
                    checked={done}
                    onChange={() => onToggle(id)}
                  />
                  <label
                    onDoubleClick={this.onDbClick}
                  >
                    {text}
                  </label>
                  <button 
                    className="destroy"
                    onClick={() => delTodo(id)}
                  />
              </div>
              <input 
                className="edit"
                defaultValue={text}
                value={this.state.text}
                onKeyUpCapture={this.onKeyUp}
                onChange={this.onChange}
              />
        </li>
    )
  }
}

export default TodoItem;