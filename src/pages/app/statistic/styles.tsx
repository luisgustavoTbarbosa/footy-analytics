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
  }

  .carousel-item:not(.is-in-view) {
    opacity: 0.4;
  }
`

export const ChampionshipDetails = styled.div`
  display: flex;
  gap: 1.875rem;

  > div form {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;

    div {
      display: flex;
      gap: 0.75rem;
    }

    .refresh-button {
      width: 2.25rem;
      height: 2.25rem;
      padding: 0;

      svg {
        width: 1.125rem;
        height: 1.125rem;
      }
    }
  }
`

export const ChampionshipTable = styled.div`
  padding: 1rem;
  border: 1px solid hsl(${(props) => props.theme['--border']});
  border-radius: ${(props) => props.theme['--radius']};
  box-shadow: ${(props) => props.theme['--shadow-sm']};
`

export const ChampionshipTableHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;

  img {
    width: 3rem;
    height: 3rem;
  }

  p {
    font-size: 1.125rem;
  }

  span {
    font-size: 0.875rem;
    color: hsl(${(props) => props.theme['--muted-foreground']});
  }
`

export const TeamPosition = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  img {
    width: 1.5rem;
  }
`

export const BestInLeagueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > p {
    font-size: 1.25rem;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

export const BestTeamCard = styled.div`
  > div:first-child {
    display: flex;
    gap: 0.5rem;

    img {
      width: 3rem;
      height: 3rem;
    }

    span {
      font-size: 0.875rem;
      color: hsl(${(props) => props.theme['--muted-foreground']});
    }
  }
`
