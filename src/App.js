import './App.css';
import { Button , DeleteIcon, FormControl , InputLabel , Box , Input } from '@material-ui/core';
import React , {Component} from 'react';
import Todo from './todo'
import db from './firebase'

class App extends Component {

  state = {
    todo : "",
    todos : []
  }
  
  // when the app loads, we need to listen to the database and fetch new Todos as they get added/removed.


  handleInput = (event) =>{
    this.setState({todo:event.target.value})
  }

  addItem = () =>{
    const tod = [...this.state.todos,this.state.todo]
    this.setState({todos:tod})
    this.setState({todo:""})
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    this.addItem()
    console.log(this.state)
  }

  lastDel = () =>{
    const tod = [...this.state.todos]
    tod.splice(tod.length-1,1)
    console.log(tod)
    this.setState({todos:tod})
  }

  toggleComplete = (id) =>{
    const tod = [...this.state.todos]
    tod.splice(id,1)
    this.setState({todos:tod})
  }

  render(){
    return (
      <div className="App">
        <Box component="div" m={1}>
        <h1>To-Do List Project</h1>
        <form>
          <FormControl>
            <InputLabel>Enter Your To-Do Here</InputLabel>
            <Input placeholder='TODO Here' value={this.state.todo} onChange={this.handleInput} />
          </FormControl>

          <Button disabled={!this.state.todo} type='submit' onClick={this.handleSubmit} variant="contained" color="primary">
              Add TODO
          </Button>         
        </form>
        <ul className="list">
        {this.state.todos.map((work,id) =>(
            <Todo text={work} toggleComplete={() => this.toggleComplete(id)} />
        ))}
        </ul>
        <Button
        onClick={this.lastDel}
        variant="contained"
        color="secondary">
          Delete Last
        </Button>
        </Box>
      </div>
    );
  }
}

export default App;
