import styled from 'styled-components'


const StyledTeams = styled.div`
    height: 100%;
    border-top: 2px solid darkcyan;
    background-color: lightcyan;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1rem;

    .team {
        width: 7rem;
        height: 7rem;
        cursor: pointer;
        margin: 2px;
        @media screen and (max-width:380px) {
            width: 6rem;
            height: 6rem;
        }
        @media screen and (max-width:333px) {
            width: 5rem;
            height: 5rem;
        }
    }
`
export default StyledTeams