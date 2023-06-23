import styled from 'styled-components';

const StyledMeanings = styled.div``;

function Meanings({ meaning }) {
  // SHORTEN DEFINITIONS ARRAY IF TOO LONG. JUST DISPLAY FIRST 5. USE SLICE METHOD.

  // SAME FOR DEFINITIONS. ONLY DISPLAY FIRST 4 OR FIVE.
  console.log(meaning);
  return (
    <StyledMeanings>
      <h3>{meaning.partOfSpeech}</h3>
      <ul>
        {meaning.definitions.map((item) => (
          <li key={item.definition}>
            <p>{item.definition}</p>
            {item.example && <h1>{item.example}</h1>}
          </li>
        ))}
      </ul>
      <div>
        {meaning.synonyms.map((item) => (
          <span key={item}>{item}, </span>
        ))}
      </div>
    </StyledMeanings>
  );
}

export default Meanings;
