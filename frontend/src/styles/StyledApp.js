import styled from 'styled-components'

const StyledApp = styled.div`
    // font styles
    .smaller {
        font-size: 0.7rem;
    }
    .boldonse-regular {
        font-family: "Boldonse", system-ui;
        font-weight: 200;
        font-style: normal;
    }
    .merriweather {
        font-family: "Merriweather", serif;
        font-optical-sizing: auto;
        font-weight: 700;
        font-style: normal;
        font-variation-settings: "wdth" 100;
    }
    // table headers
    .special-table-header thead tr th {
    background-color: ${(props) => props.color || "beige"};
    color: darkcyan;
    border: 1px solid darkcyan;
    font-size: 0.7rem;
  }
  .table-container {
    overflow-x: auto;
    white-space: nowrap;
  }
    // all clickable-logos
    .hover-image {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }
    .hover-image:hover {
        opacity: 0.5;
    }

    // hover effect
    .hover-filter {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
    }
    .hover-filter:hover {
        color: white;
        text-shadow: 
        4px 1px 2px rgba(0, 0, 0, 0.1),
        -1px -1px 2px rgba(0, 0, 0, 0.1),
        1px -1px 2px rgba(0, 0, 0, 0.1),
        -1px 1px 2px rgba(0, 0, 0, 0.1);
        filter: blur(1px) contrast(1);
    }
`
export default StyledApp