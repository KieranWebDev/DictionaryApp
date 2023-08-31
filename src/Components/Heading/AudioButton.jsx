import { useRef } from 'react';

import styled from 'styled-components';

const StyledButtonContainer = styled.div`
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: 50%;
    width: 300px;
  }

  ${
    '' /* &svg:hover {
    circle {
      opacity: 1;
    }

    path {
      fill: #fff;
    }
  } */
  }
`;

function AudioButton({ headingData }) {
  const audioRef = useRef(null);

  const handlePlay = () => {
    audioRef.current.play();
  };
  return (
    <StyledButtonContainer>
      <button onClick={handlePlay}>
        <audio ref={audioRef} src={`${headingData.audio}`}></audio>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 75 75"
        >
          <g fill="#A445ED" fillRule="evenodd">
            <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
            <path d="M29 27v21l21-10.5z" />
          </g>
        </svg>
      </button>
    </StyledButtonContainer>
  );
}

export default AudioButton;
