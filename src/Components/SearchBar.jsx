import styled from 'styled-components';

const StyledSearchBar = styled.section``;

function SearchBar({ searchQuery, setSearchQuery, getAllWordData }) {
  return (
    <StyledSearchBar>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={getAllWordData}>Save</button>
    </StyledSearchBar>
  );
}

export default SearchBar;
