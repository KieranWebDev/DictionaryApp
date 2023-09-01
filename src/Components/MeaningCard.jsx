import { useContext } from 'react';
import ThemeAndFontContext from './ThemeAndFontContext';
import styled from 'styled-components';

const StyledMeaningsCard = styled.div`
  ${
    '' /* background-color: ${(props) => `var(--${props.theme}-mode-background)`};
  font-family: ${(props) => `var(--${props.font})`};
  color: ${(props) => `var(--${props.theme}-mode-text)`}; */
  }
  .part-of-speech-container {
    display: flex;
    ${'' /* justify-content: space-between; */}
    align-items: center;
    gap: 1rem;
    margin-bottom: 2.5rem;
    font-size: 1.5rem;
  }
  .part-of-speech-container h3 {
    margin-top: -5px;
  }
  .part-of-speech-container hr {
    flex-grow: 2;
  }
  .definition-container span {
    display: block;
    margin-bottom: 1.5rem;
  }
  .definition-container ul {
    margin-left: 1.5rem;
  }
  .definition-container li {
    margin-bottom: 0.8rem;
  }
  .definition-container .example-sentence {
    margin-top: 0.8rem;
    color: var(--sub-text);
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
      <div className="part-of-speech-container">
        <h3>{meaning.partOfSpeech}</h3>
        <hr />
      </div>
      <div className="definition-container">
        <span>Meaning</span>
        <ul>
          {meaning.definitions.map((item) => (
            <li key={item.definition}>
              <p>{item.definition}</p>
              {item.example && (
                <p className="example-sentence">&quot;{item.example}&quot;</p>
              )}
            </li>
          ))}
        </ul>
      </div>
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
