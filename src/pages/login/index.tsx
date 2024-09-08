import styled from "styled-components";
import React, { useState } from "react";

const LoginPage = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        } else {
            console.error('Login failed');
        }
    };
    
    return (
        <Container>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder={"Username"} 
                    value={username} 
                    onChange={event => setUserName(event.target.value)}
                />
                <input 
                    type="password" 
                    placeholder={"Password"}
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
                <button type={"submit"}>Login</button>
            </form>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export default LoginPage;