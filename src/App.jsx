import { useState } from 'react';
import ThemeAndFontContext from './Components/ThemeAndFontContext';
import './App.css';
// Components
import SearchBar from './Components/SearchBar';
import Heading from './Components/Heading/Heading';
import MeaningsContainer from './Components/MeaningsContainer';
import NavBar from './Components/NavBar';
import AppContainer from './Components/AppContainer';
import ErrorMessage from './Components/ErrorMessage';
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
  const [font, setFont] = useState('sans-serif');
  const [theme, setTheme] = useState('light');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emptySearch, setEmptySearch] = useState(true);

  // useEffect(() => {
  //   getAllWordData(searchQuery);
  // }, [allWordData]);

  async function getAllWordData(word) {
    try {
      setLoading(true);
      setError(false);

      if (word === '') {
        setEmptySearch(true);
      } else {
        setEmptySearch(false);
      }

      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const data = await response.json();
      setAllWordData(data[0]);
      setLoading(false);
    } catch (fetchError) {
      setLoading(false);
      setError(true);
      setEmptySearch(false);
    }
  }
  // console.log(error);
  // console.log(font);
  // console.log(theme);
  return (
    <>
      <ThemeAndFontContext.Provider
        value={{
          font,
          setFont,
          theme,
          setTheme,
          getAllWordData,
          setSearchQuery,
        }}
      >
        <AppContainer theme={theme} font={font}>
          <NavBar />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            getAllWordData={getAllWordData}
            setEmptySearch={setEmptySearch}
            // setEmptySearchMessage={setEmptySearchMessage}
            emptySearch={emptySearch}
          />

          {allWordData && !error && !loading && (
            <>
              <Heading allWordData={allWordData} />
              <MeaningsContainer meaningsData={allWordData.meanings} />
            </>
          )}
          {error && <ErrorMessage />}
          {loading && !error && <h1>Loading...</h1>}
          {allWordData === null && !loading && !error && (
            <div className="welcome-message">
              <h1>Welcome to the Dictionary App</h1>
              <p>Search for a word to get started</p>
            </div>
          )}
        </AppContainer>
      </ThemeAndFontContext.Provider>
    </>
  );
}

export default App;
