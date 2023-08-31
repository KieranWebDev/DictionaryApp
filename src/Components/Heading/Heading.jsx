import { useEffect, useState } from 'react';
// icon
// import playIcon from '../../assets/icon-play.svg';
import styled from 'styled-components';
import AudioButton from './AudioButton';

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
  ${
    '' /* button {
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 50%;
  }
  button svg circle:hover {
    opacity: 1;
  }
  button svg path:hover {
    fill: #fff;
  } */
  }
`;

// const StyledSvg = styled.svg`
//   ${
//     '' /* circle {
//     opacity: 0.25;
//   }

//   path {
//     fill: #a445ed;
//   } */
//   }

//   &:hover {
//     circle {
//       opacity: 1;
//     }

//     path {
//       fill: #fff;
//     }
//   }
// `;

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

      {headingData.audio && (
        <div>
          {/* <audio ref={audioRef} src={`${headingData.audio}`}></audio> */}
          <AudioButton headingData={headingData} />
          {/* <button onClick={handlePlay}>
            <>
              <StyledSvg
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="75"
                viewBox="0 0 75 75"
              >
                <g fill="#A445ED" fillRule="evenodd">
                  <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
                  <path d="M29 27v21l21-10.5z" />
                </g>
              </StyledSvg>
            </>
          </button> */}
        </div>
      )}
    </StyledHeadingContainer>
  );
}

export default Heading;
