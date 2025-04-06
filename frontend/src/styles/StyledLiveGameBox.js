import styled from 'styled-components'

const StyledLiveGameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 820px) {
    padding: 0 10%;
  }
  

  .table {
    margin: 0;
    padding: 0;
  }
 
  .completed-game-box-header, .live-game-box-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 820px) {
      flex-direction: row;
      justify-content: space-around;
    }
  }
  .live-game-box-city, 
  .completed-game-box-city, 
  .live-game-box-date-time, 
  .completed-game-box-date-time {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  .live-game-box-date-time h3, 
  .completed-game-box-date-time h3 {
    font-size: 0.7rem;
  }
 /*  .completed-arena {
    @media screen and (max-width: 800px) {
      display: none;
    }
  } */
  h3 {
    font-size: 0.9rem;
    font-weight: bold;
  }
  h4 {
    font-size: 0.7rem;
  }
  /* h4.time {
    @media screen and (max-width: 800px) {
      display: none;
    }
  } */
  th {
    text-align: center;
    vertical-align: middle;
  }
  th.score-column {
    width: 30%;
  }
  td {
    height: 60px;
    vertical-align: middle;
  }
  .game-box-logo img {
    margin-left: 1rem;
    max-width: 70px;
    max-height: 60px;
  }
  .game-box-score {
    text-align: center;
  }
  .game-time, .halftime {
    background-color: lightblue;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 3px;
  }

  h2, h3, h4 {
    padding: 0;
    margin: 0;
  }
  h2.halftime {
    font-size: 0.9rem;
    letter-spacing: 2px;
  }
`
export default StyledLiveGameBox