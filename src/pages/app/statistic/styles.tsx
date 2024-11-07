import styled from 'styled-components'

export const StatisticContainer = styled.main`
  max-width: 1250px;
  margin: 0 auto;
  padding: 3rem 2rem 0.5rem;
`

export const LiveMatchesContainer = styled.div`
  margin-bottom: 2.5rem;

  > div:first-child {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
    font-weight: 500;
  }

  .carousel-item:not(.is-in-view) {
    opacity: 0.4;
  }
`

export const LiveMatchCard = styled.div`
  padding: 1rem;
  border: 1px solid hsl(${(props) => props.theme['--border']});
  border-radius: ${(props) => props.theme['--radius']};
  background: hsl(${(props) => props.theme['--background']});
  color: hsl(${(props) => props.theme['--foreground']});
  box-shadow: ${(props) => props.theme['--shadow-sm']};

  > div:first-child {
    display: flex;
    gap: 0.875rem;
    line-height: 1.2;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    span {
      font-size: 0.875rem;
      color: hsl(${(props) => props.theme['--muted-foreground']});
      text-transform: capitalize;
    }
  }

  > div:last-child {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 0.75rem;
  }
`

export const LiveMatchTimes = styled.div`
  p {
    font-size: 1rem;

    span {
      font-size: 0.75rem;
    }
  }

  > p:last-child {
    color: hsl(${(props) => props.theme['--primary']});
  }
`

export const LiveMatchTeams = styled.div`
  div + div {
    margin-top: 0.5rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.875rem;

    img {
      width: 2rem;
      height: 2rem;
    }
  }
`
