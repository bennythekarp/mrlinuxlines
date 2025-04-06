import styled from 'styled-components'

const StyledStats = styled.div`
  header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* padding: 0.2rem; */
    border: 7px solid darkcyan;
    background-color: beige;
  }
  header div {
    padding: 1rem;
  }
  header div img {
    max-width: 150px;
    max-height: 130px;
  }
  header div h2 {
    font-size: 2rem;
  }

  td {
    text-align: center;
    vertical-align: middle;
  }

  .pct {
    font-weight: bold;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    -webkit-text-stroke: 0.7px black;
    color: transparent; /* Makes the fill transparent */
    margin-left: 2px;
  }
  
  .date {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .date span {
    font-size: 0.7rem;
  }
  .date img {
    min-width: 40px;
    max-width: 50px;
    max-height: 50px;
    @media screen and (max-width: 700px) {
      max-width: 40px;
    }
  }
`
export default StyledStats