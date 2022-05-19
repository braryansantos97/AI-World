import React from 'react'

export default function Card({conversation}){

    const element = conversation.map((singleInteraction, i) => {
        return(
            <div key={i} className='btn-outline-success'>
                <p>{singleInteraction.prompt}</p>
                <p>{singleInteraction.aIResponse}</p>
            </div>
        )
    })
    
    return (
        <div className='overflow-scroll'>
            <div className="card border-success">
                <h5 className="card-header bg-success text-dark">Conversation</h5>
                <div className='card-body '>
                    {element}
                </div>
            </div>
        </div>
    )
}