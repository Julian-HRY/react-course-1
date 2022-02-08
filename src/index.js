import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { useState } from "react";
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//import CardReactFormContainer from 'card-react';


// ReactDOM.render(
  
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
  
// );

// className App extends React.Component{

//   constructor(props) {
//       super(props)
//       this.state = {

//       }
//   }

//   render() {
//       return (
//           <div className="App container">
//               <div className="row">

//                   <Header/>
//                   <List/>

//               </div>
//           </div>
//       )
//   }
// }



function App(){

  //const [nameList, setName] = useState('');

  //Items
  const [formElement, setFormElement] = React.useState({
    title:'',
    description:'',
    priority:'Niveau 1',
    assignedTo:'',
    status: 'Todo',
    completed:false
  });

  const [items, setItems] = React.useState([])
  const [todoEditing, setTodoEditing] = React.useState(null)
  const [editingText, setEditingText] = React.useState({
    title:'',
    description:'',
    priority:'',
    assignedTo:'',
    status:''
  })

  //list
  const [TitreList, setTitreList] = React.useState('');
  const [AllList, setAllList] = React.useState([]);

    const CreateBaseList = () => {

      const ListFinished = {
        id: new Date().getTime(),
        title : 'Finished'
      };

      setAllList(
        [...AllList].concat(ListFinished)
      )

      setTitreList('');
    }
    


  function toggleCompleted(id){

    const updatedTodo = [...items].map((todo)=>
    {
      if(todo.id === id){
        todo.completed = !todo.completed;
              
      }
      return todo;
    })

    setItems(updatedTodo);

  }

    function handleChangeList(e) {
      
      setTitreList(e.target.value);
    }
    

    function handleChange(evt) {
      const value = evt.target.value;

      setFormElement({
        ...formElement,
        [evt.target.name]: value  
      });

      //console.log(formElement.status)
    }

    function handleEditChange(evt) {
      const value = evt.target.value;

      setEditingText({
        ...editingText,
        [evt.target.name]: value  
      });

    }

    function handelSetEdit(id) {

      [...items].map((todo) => {
        if (todo.id === id) {
          setEditingText({
            ...editingText,
            title:todo.title,
            description:todo.description,
            priority:todo.priority,
            assignedTo:todo.assignedTo,
            status:todo.status
          })
        }
      })

      
      setTodoEditing(id)
    }

    const handleSubmitList = (e) => {
      e.preventDefault();

      const newList = {
        id: new Date().getTime(),
        title : TitreList};

      setAllList(
        [...AllList].concat(newList)
      )

      setTitreList('');
    }

    const handleSubmit = (e) => {
      
      e.preventDefault();

      // if (formElement.status == '') {
      //   formElement.status = 'Todo';
      // }
      // if(formElement.priority == ''){
      //   formElement.priority = 'Niveau 1';
      // }

      const newTodo = {
        id: new Date().getTime(),
        title : formElement.title,
        description : formElement.description,
        priority : formElement.priority,
        assignedTo : formElement.assignedTo,
        status: formElement.status,
        completed : false,
      }

      console.log(newTodo.completed)

      setItems(
        //add todo
        [ ...items].concat(newTodo)
      )
  
      setFormElement({
        ...formElement,
        title: '',
        priority: 'Niveau 1',
        description: '',
        assignedTo: '',
        status: 'Todo',
        completed : 'false'
      })
      
                
    }

    const handleMove = (id) =>{
      

      const updatedItems = items.filter((todo) => todo.id !== id)

      setItems(updatedItems);
    }

    function editTodo(id) {
      const updatedTodos = [...items].map((todo) => {
        console.log(todo.completed);
        if (todo.id === id) {
          todo.title = editingText.title
          todo.description = editingText.description
          todo.priority = editingText.priority
          todo.assignedTo = editingText.assignedTo
          todo.status = editingText.status
        }
        return todo;
      })
      setItems(updatedTodos);
      setTodoEditing(null);
      setEditingText('');
    }

  return(

    <div className="App container">
              <div className="d-flex justify-content-around">

                {/* <div>
                    <input value={nameList} onChange={handleChange} />

                    <button onClick={() => {setOpenForm(true);}}>Entrer tâche</button>

                      {openForm && <Modal setOpenForm={openForm} />}
                </div> */}
                <div>
                  <div className='title'> <h1>TODO</h1></div>

                  <form onSubmit={handleSubmit}>

                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor='title'>Title : </label>
                      </div>
                      <input type="text" name='title' className='form-control' onChange={handleChange} value={formElement.title} required />
                    </div>
                    
                    
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor='description'>Description : </label>
                      </div>
                      <input type="text" name='description' className='form-control' onChange={handleChange} value={formElement.description} required />
                    </div>                    
                    
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="assignedTo">Assigned to : </label>
                      </div>
                      <input type="text" name='assignedTo' className='form-control' onChange={handleChange} value={formElement.assignedTo} required />
                    </div>

                    <div className="d-flex flex-row">
                      <div className='form-group' className='p-2'>
                      <label>
                        Priority 
                        <select name="priority" onChange={handleChange} value={formElement.priority}>
                          
                          
                          <option value="Niveau 1">Niveau 1</option>
                          <option value="Niveau 2">Niveau 2</option>
                          <option value="Niveau 3">Niveau 3</option>
                        </select>
                      </label>
                      </div>

                      <div className='form-group' className='p-2'>
                        <label>
                          Status 
                          <select name="status" onChange={handleChange} value={formElement.status}>
                          {
                            [...AllList].map((list)=>{
                              return(
                              <option key={list.id} value={list.title}>{list.title}</option>)
                            })
                          }
                          </select>
                        </label>
                      </div>          
                    </div>

                    <br/>

                    <div className="footer">
                      <button type="submit" className="btn btn-primary">
                        Create Task
                      </button>
                    </div>
                  </form>
                </div>

                <div>

                  <div className='title'> <h1>List</h1></div>

                  <form onSubmit={handleSubmitList}>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor='title'>Title : </label>
                      </div>
                      <input type="text" name='title' className='form-control' onChange={handleChangeList} value={TitreList} required />
                    </div>

                    <div className="footer">
                      <button type="submit" className="btn btn-primary">
                        Create List
                      </button>
                    </div>

                    </form>
                </div>

              </div>

              <br/>

              <ul className="d-flex justify-content-start">
                
                {AllList.map((list) => 

                
                <li key={list.id} className='ListAll'>

                  

                    <div className='title'><h1>{list.title}</h1>  

                    <div className='list'>

                    <ul>
                    { 
                      items.map((item ) =>

                      {

                        if (item.status === list.title) {
                          return (
                            <li key={item.id} >
                          
                              <div className='Container'>

                                <div className = {item.completed ? "done" : 'undone'}>
                                {todoEditing === item.id ? (<span></span>) 
                                : (<button onClick={() => handelSetEdit(item.id)}>Edit Todo</button>)}

                                <br/>

                                <div>
                                <b>title : </b>
                                  {todoEditing === item.id ? 
                                  (<input type='text'
                                    onChange={handleEditChange}
                                    name='title'
                                    value={editingText.title}
                                    />) : 
                                    (item.title)}
                                    
                                </div>
                                <br/>
                                <div>
                                    <b>Description : </b>
                                    {todoEditing === item.id ? 
                                  (<input type='text'
                                    onChange={handleEditChange}
                                    name='description'
                                    value={editingText.description}
                                    />) : 
                                    (item.description)}

                                </div>
                                <br/>
                                  <div>
                                    <b>Priority : </b>
                                    {todoEditing === item.id ? 
                                  (<select name="priority" onChange={handleEditChange} value={editingText.priority}>
                                    <option value="Niveau 1">Niveau 1</option>
                                    <option value="Niveau 2">Niveau 2</option>
                                    <option value="Niveau 3">Niveau 3</option>
                                  </select>) :                
                                    (item.priority)}

                                </div>
                                <br/>
                                <div>
                                  <b>Assigned to : </b>
                                  {todoEditing === item.id ? 
                                (<input type='text'
                                  onChange={handleEditChange}
                                  name='assignedTo'
                                  value={editingText.assignedTo}
                                  />) : 
                                  (item.assignedTo)}

                                </div>
                                <br/>

                                <div>
                                  <b>Status : </b>
                                  {todoEditing === item.id ? 
                                  (<select name="status" onChange={handleEditChange} value={editingText.status}>
                                    {
                                      [...AllList].map((list)=>{
                                        return(
                                        <option key={list.id} value={list.title}>{list.title}</option>)
                                      })
                                    }
                                  </select>) :                
                                  (item.status)}

                              </div>

                                </div>
                               

                              <br/>
                              
                              {todoEditing === item.id ? (<button className='btn btn-primary' onClick={() => editTodo(item.id)}>Submit Edits</button>) 
                              : (
                              <div className='row'>
                                <button className='btn btn-danger' onClick={() => handleMove(item.id)}>delete</button>
                                <button className='btn btn-danger' onClick={() => toggleCompleted(item.id)}>completed</button>  
                              </div>
                              )}
                              
                          </div>
              
                        </li>);
                        }
                      }              
                
      
                      )
                  }
                  </ul>
                  </div>

                  </div>
                </li>
              )
                }

              </ul>


              
    </div>
  )
}

export default App;



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
