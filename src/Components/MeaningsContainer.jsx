import styled from 'styled-components';
import MeaningCard from './MeaningCard';

const StyledMeanings = styled.div`
  ${
    '' /* background-color: ${(props) => `var(--${props.theme}-mode-background)`};
  color: ${(props) => `var(--${props.theme}-mode-text)`};

  font-family: ${(props) => `var(--${props.font})`}; */
  }
`;

function MeaningsContainer({ meaningsData }) {
  console.log(meaningsData);

  return (
    <StyledMeanings>
      {meaningsData.map((meaning, index) => (
        <MeaningCard key={index} meaning={meaning} />
      ))}
    </StyledMeanings>
  );
}

export default MeaningsContainer;
