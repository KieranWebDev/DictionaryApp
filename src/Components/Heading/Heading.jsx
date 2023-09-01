import { useEffect, useState } from 'react';
import styled from 'styled-components';
// components
import AudioButton from './AudioButton.jsx';

const StyledHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;

  h1 {
    font-size: var(--headingL);
    margin-bottom: 0.5rem;
  }
  h3 {
    font-size: var(--headingM);
    color: var(--purple);
  }
`;

function Heading({ allWordData }) {
  const [headingData, setHeadingData] = useState({
    word: '',
    phoneticSpelling: '',
    audio: '',
  });

  function getHeadingData() {
    if (allWordData) {
      const word = allWordData.word;
      const phoneticSpelling = getPhoneticSpelling();
      const audio = getAudio();

      setHeadingData({
        word: word,
        phoneticSpelling: phoneticSpelling,
        audio: audio,
      });
    }
  }

  function getPhoneticSpelling() {
    const { phonetic, phonetics } = allWordData;
    // Check if the value for 'phonetic' is present
    let phoneticSpelling = phonetic || '';
    // If 'phonetic' is not present, search in the 'phonetics' array
    if (!phoneticSpelling && phonetics && phonetics.length > 0) {
      const { text } = phonetics.find((phonetic) => phonetic.text) || {};
      phoneticSpelling = text || '';
    }
    return phoneticSpelling;
  }

  function getAudio() {
    const { audio } =
      allWordData.phonetics.find((phonetic) => phonetic.audio) || {};
    return audio || '';
  }

  useEffect(() => {
    getHeadingData();
  }, [allWordData]);

  useEffect(() => {
    console.log(headingData);
  }, [headingData]);

  return (
    <StyledHeadingContainer>
      <div>
        <h1>{headingData.word}</h1>
        {headingData.phoneticSpelling && (
          <h3>{headingData.phoneticSpelling}</h3>
        )}
      </div>
      {headingData.audio && <AudioButton headingData={headingData} />}
    </StyledHeadingContainer>
  );
}

export default Heading;
