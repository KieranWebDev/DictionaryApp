import { useContext } from 'react';
import ThemeAndFontContext from './ThemeAndFontContext';
import styled from 'styled-components';

const StyledMeaningsCard = styled.div`
  ${
    '' /* background-color: ${(props) => `var(--${props.theme}-mode-background)`};
  font-family: ${(props) => `var(--${props.font})`};
  color: ${(props) => `var(--${props.theme}-mode-text)`}; */
  }
`;

function Meanings({ meaning }) {
  const { getAllWordData, setSearchQuery } = useContext(ThemeAndFontContext);

  const newSearch = (synonym) => {
    console.log('item' + synonym);
    setSearchQuery(synonym);
    getAllWordData(synonym);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SHORTEN DEFINITIONS ARRAY IF TOO LONG. JUST DISPLAY FIRST 5. USE SLICE METHOD.

  // SAME FOR DEFINITIONS. ONLY DISPLAY FIRST 4 OR FIVE.
  console.log(meaning);
  return (
    <StyledMeaningsCard>
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
        <h2>SYNONYMS</h2>
        {meaning.synonyms?.map((item) => (
          <span onClick={() => newSearch(item)} key={item}>
            {item},{' '}
          </span>
        ))}
      </div>
    </StyledMeaningsCard>
  );
}

export default Meanings;
