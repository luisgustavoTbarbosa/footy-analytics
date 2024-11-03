import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 2rem;

  nav {
    a {
      div {
        width: 2.5rem;
        padding: 0.5rem 0;
        transition: background-color 0.2s ease;

        img {
          width: 1.5rem;
          height: 1.5rem;
          margin: 0 auto;
        }
      }
    }

    h2 {
      color: hsl(${(props) => props.theme['--chart-1']});
    }
  }
`
