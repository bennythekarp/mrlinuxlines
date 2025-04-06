import styled from 'styled-components'

const StyledHome = styled.div`
  
  background-color: lavenderblush;
  display: flex;
  @media screen and (max-width: 900px) {
    flex-direction: column;
   }
  
   .table {
    cursor: pointer;
  }
  .games-displays {
    border: 1px solid black;
    min-width: 25%;
  }

  .upcoming-games-display {
    flex: 1;
  }

  
  .games-header {
    display: flex;
    font-size: 1.2rem;
    padding: 0.2rem 1rem;
    color: rgb(218, 235, 146);
    background-color: darkcyan;
    border-bottom: 4px solid rgb(218, 235, 146);
    margin: 0;
  }
`
export default StyledHome