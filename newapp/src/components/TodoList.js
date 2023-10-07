import React from "react";

const TodoList = (props) => {

   
    return (
        <>
        <div class="Todo_Style">
        <i class="fa fa-trash" aria-hidden="true" onClick={() => {
            props.onSelect(props.id)
        }}
        />
        <li> {props.text} </li>
        </div>
        </>
    );
};

export default TodoList;