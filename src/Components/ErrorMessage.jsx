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

function ErrorMessage() {
  return (
    <StyledContainer>
      <h1>😕</h1>
      <h3>No Definitions Found</h3>
      <p>
        Sorry pal, we couldn&apost find definitions for the word you were
        looking for. You can try the search again at later time or head to the
        web instead.
      </p>
    </StyledContainer>
  );
}

export default ErrorMessage;
