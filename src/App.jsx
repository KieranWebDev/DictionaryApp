import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [allWordData, setAllWordData] = useState(null);
  const [headingData, setHeadingData] = useState({
    name: '',
    phoneticSpelling: '',
    audio: '',
  });

  async function getAllWordData() {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`
    );
    const data = await response.json();
    setAllWordData(data[0]);
  }

  function getNameData() {
    if (allWordData) {
      const name = allWordData.word;
      const { text: phoneticSpelling } = allWordData.phonetics.find(
        (phonetic) => phonetic.text
      );
      const { audio } = allWordData.phonetics.find(
        (phonetic) => phonetic.audio
      );

      setAllWordData({
        name: name,
        phoneticSpelling: phoneticSpelling,
        audio: audio,
      });
    }
  }

  useEffect(() => {
    getNameData();
    console.log(allWordData);
  }, [allWordData]);

  return (
    <>
      <h1>yo</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={getAllWordData}>Save</button>

      {allWordData && (
        <>
          <h2>{allWordData.word}</h2>
        </>
      )}
    </>
  );
}

export default App;
