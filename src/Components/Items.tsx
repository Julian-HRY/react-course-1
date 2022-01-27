import React, { useState } from 'react';
import './Items.css';

function Items({AllItems} : {AllItems : any}){


  const handleMove = (id:any) =>{

    const updatedTodo = AllItems.map((item:any) =>{
      if (item.id == id) {
        AllItems.splice(item);
      }
    });

    //actulaiser item?
  }

  function handleDone(id:any) {

    
    
    const updatedTodo = AllItems.map((item:any) =>{

      console.log(item.id)
      if (item.id == id) {
        console.log('OU')
        item.done = !item.done;
      }
    });

  }

    const ListItems = AllItems.map((item :any) =>
    
      <li key={item.id} className = {item.done ? "done" : 'undone'}>

        <button onClick={() => handleDone(item.id)}>Undone</button>
        <div>
            <b>title : </b>
            {item.title}
        </div>
        <br/>
        <div>
            <b>Description : </b>
            {item.description}
        </div>
        <br/>
          <div>
            <b>Priority : </b>
            {item.priority}
          </div>
          <br/>
          <div>
            <b>Assigned to : </b>
            {item.assignedTo}
          </div>
          <br/>
          <button onClick={() => handleMove(item.id)}>delete</button>

      </li>
    )

    return (
      <ul>{ListItems}</ul>
    )
}

export default Items;

function e(e: any, id: any): React.MouseEventHandler<HTMLButtonElement> | undefined {
  throw new Error('Function not implemented.');
}
