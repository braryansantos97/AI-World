import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Card from '../components/Card';
import Form from '../components/Form';

const { Configuration, OpenAIApi } = require("openai");


export default function Chat() {

    const [aIResponse, setAIResponse] = useState('');
    const [humanMessage, setHumanMessage] = useState('');
    const [conversation, setConversation] = useState([]);


    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    });
    
    const openai = new OpenAIApi(configuration);


    const getData = (e) => {
        e.preventDefault();

            openai.createCompletion("text-curie-001", {
                prompt: `The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: ${humanMessage}`,
                temperature: 0.9,
                max_tokens: 150,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0.6,
                stop: [" Human:", " AI:"],
            })
            .then((response) => {
                console.log(response);
                console.log(humanMessage);
                const promptAndAIResponse = {
                    prompt: `Human: ${humanMessage}`,
                    aIResponse: response.data.choices[0].text
                };
                // setAIResponse(promptAndAIResponse.aIResponse);
                console.log(promptAndAIResponse.aIResponse);
                setConversation([promptAndAIResponse, ...conversation]);
                console.log(conversation);
                setHumanMessage('');
            })
    };

    return (
        <div className='Chat '>
            <h1 className='text-center'>Chat AI</h1>
            <div className='container'>
                <Card
                    conversation={conversation}
                    aIResponse={aIResponse}
                />
                <Form 
                    humanMessage={humanMessage}
                    setHumanMessage={setHumanMessage}
                    getData={getData}
                />
            </div>
        </div>
    )
}
