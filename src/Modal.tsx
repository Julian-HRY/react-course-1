import React, { useState } from 'react';
import "./Modal.css";


function Modal({ setOpenForm } : {setOpenForm:any}){


    return(
        <div className='modalBackground'>
            <div className='modalContainer'>
                <button onClick={() => setOpenForm(false)}>X</button>
                </div>
                <div className="title">
                <h1>Are You Sure You Want to Continue?</h1>
                </div>
                <div className="body">
                <p>The next page looks amazing. Hope you want to go there!</p>
                </div>
                <div className="footer">
                <button
                    onClick={() => {
                    setOpenForm(false);
                    }}
                    id="cancelBtn"
                >
                    Cancel
                </button>
                <button>Continue</button>
            </div>
        </div>
    )
}

export default Modal;