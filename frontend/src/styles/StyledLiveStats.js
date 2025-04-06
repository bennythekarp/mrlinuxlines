import styled from 'styled-components'

const StyledLiveStats = styled.div`

  .boxscore-row td {
    background-color: beige;
    height: 100px;
    text-align: center;
    vertical-align: middle;
  }
  .boxscore-quarter {
    width: 100px;
  }
  .boxscore-logo {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  .boxscore-row td img {
    display: flex;
    max-width: 90px;
    min-height: 60px;
    max-height: 80px;
  }
 .table {
    margin: 0;
    background-color: beige;
  }
  .player-name {    
        text-decoration: none;
        color: black;               
    }
  .live-player-name {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 4rem;
  }
  .live-player-name img {
    width: 3rem;
    max-height: 3.5rem;
  }
  td {
    text-align: center;
    vertical-align: middle;
  }
`
export default StyledLiveStats