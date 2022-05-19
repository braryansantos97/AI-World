import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Form({humanMessage, setHumanMessage, getData}){

    const handleChange = (e) => {
        setHumanMessage(e.target.value);
    }
    
    const navigate = useNavigate();
    
    return (
        <div className=''>
            <form onSubmit={getData}>
                <div className="">
                    <label htmlFor="messageInput" className="form-label">Message</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        name="humanMessageInput" 
                        id="humanMessageInput" 
                        aria-describedby="messageHelp"
                        value={humanMessage}
                        onChange={handleChange}
                    />
                    <div id="messageHelp" className="form-text">Enter your message</div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                    <button onClick={() => { navigate(-1) }} className='btn btn-outline-success'>Go Back</button>
                </div>
            </form>
        </div>
    )
}