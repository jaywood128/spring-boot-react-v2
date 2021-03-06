import styled from "styled-components";

const SearchResultsContainerStyles = styled.div`
  display: flex;
  /* background-color: #484848; */
  background-color: yellow;
  height: 100vh;
  margin-left: 50px;
  flex-direction: column;
  flex-wrap: wrap;
`;
const EpisodeSearchResultsContainer = styled.div`
  display: flex;
  height: 10px;
  width: 700px;
  flex: 1;
  font-family: "Gothic A1, sans-serif";
`;

export { SearchResultsContainerStyles, EpisodeSearchResultsContainer };
