import React from 'react';
import styled from 'styled-components';

const LoginPage = () => {
    return (
        <Container>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder={"Nome do usuário"} />
                <input type="password" placeholder={"Senha"}/>
                <button type={"submit"}>Logar</button>
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