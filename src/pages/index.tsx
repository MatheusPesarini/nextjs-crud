// index.tsx
import styled from 'styled-components';

const HomePage = () => {
    return (
        <Container>
            <h1>Welcome to My Next.js App</h1>
            <p>This is the homepage of your Next.js app with TypeScript and styled-components.</p>
        </Container>
    );
};

export default HomePage;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;

    h1 {
        font-size: 2.5rem;
    }

    p {
        font-size: 1.2rem;
    }
`;
