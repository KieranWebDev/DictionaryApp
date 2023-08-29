import { useContext } from 'react';
import styled from 'styled-components';
import ThemeAndFontContext from './ThemeAndFontContext';

const StyledBackground = styled.div`
  background-color: ${(props) => `var(--${props.theme}-mode-background)`};
  transition: all 0.3s ease-in-out;
`;

const StyledAppContainer = styled.div`
  background-color: ${(props) => `var(--${props.theme}-mode-background)`};
  font-family: ${(props) => `var(--${props.font})`};
  color: ${(props) => `var(--${props.theme}-mode-text)`};
  margin: 0 auto;
  padding: 2rem;
  transition: all 0.3s ease-in-out;
  min-height: 100vh;
  ${'' /* max-width: 1200px; */}
  max-width:750px;
  margin: 0 auto;
  border: 2px solid red;
  padding: 2rem 1rem;
`;

function AppContainer({ children }) {
  const { font, theme } = useContext(ThemeAndFontContext);

  return (
    <StyledBackground theme={theme}>
      <StyledAppContainer theme={theme} font={font}>
        {children}
      </StyledAppContainer>
    </StyledBackground>
  );
}

export default AppContainer;
