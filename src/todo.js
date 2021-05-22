import React from 'react'
import './todo.css'
import { Button, List , ListItem , ListItemText } from '@material-ui/core';


function todo(props) {

    let complete = false

    const Deleter = () =>{
        complete = 
        console.log(complete)
    }

    return (
        <List className="todo_list">
            <ListItem className='item'>
                <ListItemText primary={props.text} secondary = "To-Do Work" />
                <Button onClick={props.toggleComplete} color="secondary">Delete</Button>
            </ListItem>
        </List>
    )
}

export default todo
