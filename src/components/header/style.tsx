import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1250px;
  margin: 0 auto;
  padding: 0.5rem 2rem;

  figure svg {
    path {
      fill: ${(props) => props.theme['--logo']};
    }
  }

  nav {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    a {
      div {
        width: 2.25rem;
        padding: 0.5rem 0;
        transition: all 0.2s ease;
        border-radius: 6px;

        &:hover {
          background-color: hsl(${(props) => props.theme['--accent']});
        }

        svg {
          width: 1.25rem;
          height: 1.25rem;
          margin: 0 auto;

          path {
            fill: hsl(${(props) => props.theme['--foreground']});
          }
        }
      }
    }

    h2 {
      color: hsl(${(props) => props.theme['--chart-1']});
    }
  }
`
