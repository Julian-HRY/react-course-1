import { stringify } from 'querystring';
import React, { useState } from 'react';

// export default class Header extends React.Component{

//     constructor(props: any){
//         super(props)
//         this.state = {
//             name : '',
//             age: ''
//         }
//     }

//     render() {
//         return(
//             <div>
//                 <h1>TO DO LIST</h1>
                
//                 <div>
//                     <h2>Ajouter une tâche</h2>
//                         <input placeholder='Entrer une tâche' value={this.state.value} >

//                         </input>
//                 </div>
//             </div>

//         )
//     }
// }

function Header(props : any){

    const [nameList, setName] = useState('');
    //const [age, setAge] = useState(17);

    const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setName(e.target.value)
    }


    function createTask(){
        console.log('bou')

        //Créer block task

    }

    const handleSubmit = (e: any) => {
        console.log(nameList);
        //Créer fonction pour

        createTask()
    }

    return(
        <div>
            
            <input value={nameList} onChange={handleChange} />
            <label htmlFor='nameList'></label>
            <button onClick={handleSubmit}>Entrer tâche</button>
        </div>
    )

}

export default Header;