import React from 'react'
import { useState } from 'react'
import "./index.css"

export default function Modal() {
    const [modal, setModal] = useState(false);

    function toggleModal() {
        setModal(!modal)
    }
    
    return (
        <>
            <button onClick={toggleModal} className="glow-on-hover">
                Modal
            </button>

            {
            modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Hello Modal</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                            perferendis suscipit officia recusandae, eveniet quaerat assumenda
                            id fugit, dignissimos maxime non natus placeat illo iusto!
                            Sapiente dolorum id maiores dolores? Illum pariatur possimus
                            quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                            placeat tempora vitae enim incidunt porro fuga ea.
                        </p>
                        <div className="close-modal" onClick={toggleModal}>
                            X
                        </div>
                        <button className='button' onClick={toggleModal}>
                            CLOSE
                        </button>
                    </div>
                </div>
                
            )}
        </>
    )
}
