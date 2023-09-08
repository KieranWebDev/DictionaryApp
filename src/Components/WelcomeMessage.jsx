import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  text-align: center;
  width: 80%;
  margin: 0 auto;
`;

function WelcomeMessage() {
  return (
    <StyledContainer>
      <h1>Welcome to the Dictionary App</h1>
      <p>Search for a word to get started</p>
    </StyledContainer>
  );
}

export default WelcomeMessage;
