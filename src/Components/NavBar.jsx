import { useContext } from 'react';
import ThemeAndFontContext from './ThemeAndFontContext';
import styled from 'styled-components';

import Logo from '../assets/logo.svg';

const StyledNavBar = styled.nav`
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .themes-switch-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .themes-switch-container .vertical-line {
    width: 1px;
    height: 20px;
    margin: 0 auto;
    background: red;
    color: red;
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
      <div>
        <img src={Logo} alt="logo" />
      </div>
      <div className="themes-switch-container">
        <select name="font" id="font-select" onChange={handleFontChange}>
          <option value="sans-serif">Sans Serif</option>
          <option value="serif">Serif</option>
          <option value="mono">Mono</option>
          <option value="cursive">Cursive</option>
        </select>
        <div className="vertical-line"></div>
        <button onClick={handleThemeSwitch}>Theme Switch</button>
      </div>
    </StyledNavBar>
  );
}

export default NavBar;
