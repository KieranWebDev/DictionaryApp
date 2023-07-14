import styled from 'styled-components';

const StyledSearchBar = styled.section``;

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
        <button onClick={submitForm}>Save</button>
      </form>
    </StyledSearchBar>
  );
}

export default SearchBar;
