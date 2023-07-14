import { useContext } from 'react';
import ThemeAndFontContext from './ThemeAndFontContext';
import styled from 'styled-components';

const StyledNavBar = styled.nav`
  ${
    '' /* background-color: ${(props) => `var(--${props.theme}-mode-background)`};
  color: ${(props) => `var(--${props.theme}-mode-text)`};
  font-family: ${(props) => `var(--${props.font})`}; */
  }
`;

function NavBar() {
  const { setFont, setTheme } = useContext(ThemeAndFontContext);

  const handleFontChange = (e) => {
    setFont(e.target.value);
  };

  const handleThemeSwitch = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <StyledNavBar>
      <h2>logo here</h2>
      <div>
        <select name="font" id="font-select" onChange={handleFontChange}>
          <option value="sans-serif">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="mono">Mono</option>
          <option value="cursive">Cursive</option>
        </select>
        <span>|</span>
        <button onClick={handleThemeSwitch}>Theme Switch</button>
      </div>
    </StyledNavBar>
  );
}

export default NavBar;
