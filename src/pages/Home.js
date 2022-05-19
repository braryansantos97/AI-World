import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
    
    return (
        <div className='text-center'>
            <h1>Welcome to AI Word</h1>
            <p>Interact with this AIs</p>
            <div className='container'>
                <div className="card text-white bg-primary mb-3" style={{maxWidth: '20rem'}}>
                    <div className="card-header">Chat AI</div>
                        <div className="card-body">
                            <h4 className="card-title">Chat with this AI</h4>
                            <p className="card-text">The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.</p>
                            <Link to='/chatai' type="button" className="btn btn-outline-success">Go</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}