import styled from 'styled-components'

const StyledUpcomingGames = styled.div`
    h3, h4 {
        padding: 0;
        margin: 0;
    }
   .upcoming-game th {
       border: 0.8px solid darkcyan;
       text-align: center;
       vertical-align: middle;
    }
    .upcoming-game th h3 {
        font-size: 1rem;
    }
    .upcoming-game th h4 {
        font-size: 0.8rem;
    }
    .upcoming-game-box-logos {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 1rem 1.5rem;
    }
    .upcoming-game-box-logos img {
        min-width: 50px;
        max-width: 70px;
        min-height: 40px;
        max-height: 60px;
    }
    .upcoming-game-box-city {
        width:45%;
        /* @media screen and (max-width: 970px) {
            display: none;
        } */
    }
    .upcoming-game-box-city h3 {
        font-size: 0.9rem;
        font-weight: bold;
    }
    .upcoming-game-box-city h4 {
        font-size: 0.7rem;
    }
    .upcoming-game-box-date {
        width: 10%;
       @media screen and (max-width: 600px) {
            display: none;
        }
    }
    .upcoming-game-box-time {
        width: 10%;
        @media screen and (max-width: 700px) {
            display: none;
        }
    }
`

export default StyledUpcomingGames