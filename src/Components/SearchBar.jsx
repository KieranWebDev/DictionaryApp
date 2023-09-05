import { useState } from 'react';

import styled from 'styled-components';
import iconSearch from '../assets/icon-search.svg';

const StyledSearchBar = styled.section`
  margin-bottom: 3rem;

  form {
    display: flex;
    justify-content: space-between;
  }
  input {
    font-weight: 700;
    flex-grow: 2;
    ${'' /* padding: 0.5rem; */}
    padding: 1.2rem 1.5rem;

    ${'' /* border-right: none; */}
    border: none;
    border-radius: 1rem 0 0 1rem;
    background: var(--search-box);
    font-size: 1.3rem;
  }

  button {
    ${'' /* border-left: none; */}
    border: none;
    background: transparent;
    cursor: pointer;
    min-width: 60px;
    border-radius: 0 1rem 1rem 0;
    background: var(--search-box);
    margin: 0 auto;
    text-align: center;
  }
`; /*change later*/

function SearchBar({
  searchQuery,
  setSearchQuery,
  getAllWordData,
  setEmptySearch,
  emptySearch,
}) {
  const [searchSubmitted, setSearchSubmitted] = useState(false);

  function submitForm(e) {
    e.preventDefault();

    setSearchSubmitted(true);

    if (searchQuery === '') {
      setEmptySearch(true);
      return;
    }
    getAllWordData(searchQuery);
    // setSearchQuery(searchQuery);
    setEmptySearch(false);
  }

  function onInputChange(e) {
    if (searchSubmitted && e.target.value === '') {
      setEmptySearch(true);
      setSearchQuery(e.target.value);
    } else {
      setEmptySearch(false);
      setSearchQuery(e.target.value);
    }
  }

  return (
    <StyledSearchBar>
      <form>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onInputChange(e)}
          placeholder="Search for a word..."
        />

        <button onClick={submitForm}>
          <img src={iconSearch} alt="" />
        </button>
      </form>
      {emptySearch && searchSubmitted && <p>Whoops, can’t be empty…</p>}
    </StyledSearchBar>
  );
}

export default SearchBar;
