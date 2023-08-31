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

function SearchBar({ searchQuery, setSearchQuery, getAllWordData }) {
  function submitForm(e) {
    e.preventDefault();
    getAllWordData(searchQuery);
    setSearchQuery(searchQuery);
  }

  return (
    <StyledSearchBar>
      <form>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={submitForm}>
          <img src={iconSearch} alt="" />
        </button>
      </form>
    </StyledSearchBar>
  );
}

export default SearchBar;
