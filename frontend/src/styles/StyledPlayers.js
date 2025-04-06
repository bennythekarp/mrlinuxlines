import styled from 'styled-components'

const StyledPlayers = styled.div`
    h1 {
        margin: 0;
        padding: 1rem;
        background-color: darkcyan;
        color: rgb(218, 235, 146);
    }
   
    header img {
    width: 150px;
    max-height: 150px;
    padding: 1rem;
  }
    div {
        display: flex;
        flex-direction: column;
    }
    
    tr.player-row {
        /* border: solid black 1px; */
    }
    .player-name {    
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
        -webkit-text-stroke: 0.2px black; /* 2px border in black */
        font-weight: bold;
        font-size: 1.4rem;          
    }
    .table, .player-name {
        @media screen and (max-width: 400px) {
            font-size: 1.1rem;
        }
    }
    
`
export default StyledPlayers