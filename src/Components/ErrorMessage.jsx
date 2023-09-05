import styled from 'styled-components';

function ErrorMessage() {
  return (
    <div>
      <h1>😕</h1>
      <h3>No Definitions Found</h3>
      <p>
        Sorry pal, we couldn&apost find definitions for the word you were
        looking for. You can try the search again at later time or head to the
        web instead.
      </p>
    </div>
  );
}

export default ErrorMessage;
