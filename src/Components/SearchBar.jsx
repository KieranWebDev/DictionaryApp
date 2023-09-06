import { useState, useRef } from 'react';

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
  input:focus {
    outline: none;
    ${'' /* border: 1px solid purple; */}

    ${
      '' /* border: ${(props) =>
      props.emptysearch === 'true' && props.searchsubmitted === 'true'
        ? '2px solid red'
        : '2px solid purple'}; */
    }
border: 2px solid var(--purple);
    ${
      '' /* border-color: ${(props) =>
      props.emptysearch === 'true' ? 'red' : 'green'}; */
    }
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

  .empty-search-message {
    color: red;
    margin-top: 0.5rem;
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
  const inputRef = useRef();

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

  console.log('test ' + emptySearch.toString() + typeof emptySearch.toString());
  console.log('yo ' + searchSubmitted.toString());
  return (
    <StyledSearchBar>
      <form>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onInputChange(e)}
          placeholder="Search for a word..."
          emptysearch={emptySearch.toString()}
          searchsubmitted={searchSubmitted.toString()}
          ref={inputRef}
        />

        <button onClick={submitForm} onFocus={() => inputRef.current.focus()}>
          <img src={iconSearch} alt="" />
        </button>
      </form>
      {emptySearch && searchSubmitted && (
        <p className="empty-search-message">Whoops, can’t be empty…</p>
      )}
    </StyledSearchBar>
  );
}

export default SearchBar;
