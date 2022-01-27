import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import './index.css';
import { useState } from "react";
import reportWebVitals from './reportWebVitals';
//import CardReactFormContainer from 'card-react';
import Items from './Components/Items';
import { render } from '@testing-library/react';

// ReactDOM.render(
  
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
  
// );

// class App extends React.Component{

//   constructor(props:any) {
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

  const [nameList, setName] = useState('');
  const [openForm, setOpenForm] = useState(false);

  const [formElement, setFormElement] = React.useState({
    title:'',
    description:'',
    priority:'',
    assignedTo:'',
  });

  const [items, setItems] = React.useState([])

  var item :any = [];

    // const handleChangee = (e: { 
    //   target: { 
    //     value: React.SetStateAction<string>; }; }) => {
    //     setName(e.target.value)
    // }

    

    function handleChange(evt:any) {
      const value = evt.target.value;

      setFormElement({
        ...formElement,
        [evt.target.name]: value  
      });
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      
      e.preventDefault();

      const newTodo:any = {
        id: new Date().getTime(),
        title : formElement.title,
        description : formElement.description,
        priority : formElement.priority,
        assignedTo : formElement.assignedTo,
        done : false,
      }


      setItems(
        //add todo
        [ ...items].concat(newTodo)
      )
  
      setFormElement({
        ...formElement,
        title: '',
        priority: '',
        description: '',
        assignedTo: ''
      })
      
                
    }

  return(
    <div className="App container">
              <div className="row">

                {/* <div>
                    <input value={nameList} onChange={handleChange} />

                    <button onClick={() => {setOpenForm(true);}}>Entrer tâche</button>

                      {openForm && <Modal setOpenForm={openForm} />}
                </div> */}

                <div className='card-title'> <h1>TODO</h1></div>
                <div className='card-body'>

                  <form onSubmit={handleSubmit}>
                    <label htmlFor='title'>Title : </label>
                    <input type="text" name='title' onChange={handleChange} value={formElement.title} required />
                    <br />
                    <br />
                    <label htmlFor='description'>Description : </label>
                    <input type="text" name='description' onChange={handleChange} value={formElement.description} required />
                    <br />
                    <br />
                    <label>
                      Priority
                      <select name="priority" onChange={handleChange} value={formElement.priority}>
                        <option value="Niveau 1">Niveau 1</option>
                        <option value="Niveau 2">Niveau 2</option>
                        <option value="Niveau 3">Niveau 3</option>
                      </select>
                    </label>
                    <br />
                    <br />
                    <label htmlFor="assignedTo">Assigned to : </label>
                    <input type="text" name='assignedTo' onChange={handleChange} value={formElement.assignedTo} required />
                    <br />
                    <br />

                    <div className="footer">
                      <button type="submit" className="btn-submit">
                        Create Task
                      </button>
                    </div>
                  </form>
                </div>

              </div>

              <div className='list'>
                  <Items AllItems={items}></Items>
              </div>
    </div>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
