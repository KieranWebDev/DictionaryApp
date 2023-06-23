import styled from 'styled-components';
import Meaning from './MeaningCard';

const StyledMeanings = styled.section``;

function MeaningsContainer({ meaningsData }) {
  console.log(meaningsData);

  return (
    <StyledMeanings>
      {meaningsData.map((meaning, index) => (
        <Meaning key={index} meaning={meaning} />
      ))}
    </StyledMeanings>
  );
}

export default MeaningsContainer;
