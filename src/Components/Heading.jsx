import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledHeading = styled.section``;

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
    <StyledHeading>
      <h1>{headingData.word}</h1>
      {headingData.phoneticSpelling && <h3>{headingData.phoneticSpelling}</h3>}
      {/* <p>{headingData.audio}</p> */}
      {headingData.audio && (
        <audio controls src={`${headingData.audio}`}>
          <a href={`${headingData.audio}`}>play</a>
        </audio>
      )}
    </StyledHeading>
  );
}

export default Heading;
