import { useState } from 'react';
import ThemeAndFontContext from './Components/ThemeAndFontContext';
import './App.css';
import SearchBar from './Components/SearchBar';
import Heading from './Components/Heading';
import MeaningsContainer from './Components/MeaningsContainer';
import NavBar from './Components/NavBar';
import AppContainer from './Components/AppContainer';
// import styled from 'styled-components';

// const StyledAppContainer = styled.div`
//   background-color: ${(props) => `var(--${props.theme}-mode-background)`};
//   font-family: ${(props) => `var(--${props.font})`};
//   color: ${(props) => `var(--${props.theme}-mode-text)`};
//   margin: 0 auto;
//   padding: 2rem;
//   ${'' /* max-width: 1200px; */}
// `;

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [allWordData, setAllWordData] = useState(null);
  const [font, setFont] = useState('Sans Serif');
  const [theme, setTheme] = useState('light');

  async function getAllWordData() {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`
    );
    const data = await response.json();
    setAllWordData(data[0]);
  }
  console.log(font);
  console.log(theme);
  return (
    <>
      <ThemeAndFontContext.Provider value={{ font, setFont, theme, setTheme }}>
        <AppContainer theme={theme} font={font}>
          <NavBar />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            getAllWordData={getAllWordData}
          />

          {allWordData && (
            <>
              <Heading allWordData={allWordData} />
              <MeaningsContainer meaningsData={allWordData.meanings} />
            </>
          )}
        </AppContainer>
      </ThemeAndFontContext.Provider>
    </>
  );
}

export default App;
