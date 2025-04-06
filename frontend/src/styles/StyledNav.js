import styled from 'styled-components'

const StyledNav = styled.div`
  .nav-bar {
    background: linear-gradient(rgb(201, 195, 195),rgb(255, 235, 87));
    display: flex;
    justify-content: space-between;
    /* border-bottom: 1px solid black; */
  }
  .nav-links {
    display: flex;
    align-items: center;
  }
  .link {
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: none;
    color: darkcyan;
  }
  .nav-brand {
    margin-right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
  }
  .nav-brand h1, h2 {
    padding: 0;
    margin: 0;
  }
  .nav-brand h1 {
    font-size: 1.5rem;
    color: darkcyan;
  }
  .nav-brand h2 {
    font-size: 1rem;
    color: purple;
  }
  .nav-img-container {
    width: 120px;
    height: 100px;
    background: url('../../images/MrLinuxLinesPenguin.png' );
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 1;
    background-blend-mode: overlay;
  }
`
export default StyledNav