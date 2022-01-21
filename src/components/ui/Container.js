import styled from 'styled-components';

const Container = styled.div`
    margin: 1rem;
    flex: 0 1 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
    @media (min-width:768px) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
 }
`;

export default Container;