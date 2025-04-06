import styled from 'styled-components'

const StyledHover = styled.th`
    cursor: pointer;
    
    span {
       font-size: 1rem;
       /* @media screen and (max-width: 720px) {
         font-size: 0.5rem;
       } */
    }
    
    &:hover {
        background-color: ${(props) => props.color || "pink"};
    }
    &:hover span {
        color: white;
        text-shadow: 
        4px 1px 2px rgba(0, 0, 0, 0.1),
        -1px -1px 2px rgba(0, 0, 0, 0.1),
        1px -1px 2px rgba(0, 0, 0, 0.1),
        -1px 1px 2px rgba(0, 0, 0, 0.1);
        filter: blur(1px) contrast(1);
    }
`

export default StyledHover