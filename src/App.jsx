import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';
import Heading from './Components/Heading';
import MeaningsContainer from './Components/MeaningsContainer';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [allWordData, setAllWordData] = useState(null);

  async function getAllWordData() {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`
    );
    const data = await response.json();
    setAllWordData(data[0]);
  }

  // function getHeadingData() {
  //   if (allWordData) {
  //     const word = allWordData.word;
  //     const { text: phoneticSpelling } = allWordData.phonetics.find(
  //       (phonetic) => phonetic.text
  //     );
  //     const { audio } = allWordData.phonetics.find(
  //       (phonetic) => phonetic.audio
  //     );

  //     setHeadingData({
  //       word: word,
  //       phoneticSpelling: phoneticSpelling,
  //       audio: audio,
  //     });
  //     console.log(headingData);
  //   }
  // }

  // useEffect(() => {
  //   getNameData();
  //   console.log(allWordData);
  // }, [allWordData]);

  return (
    <>
      <h1>yo</h1>
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
    </>
  );
}

export default App;
