import styled from 'styled-components'

export const StatisticContainer = styled.main`
  max-width: 1250px;
  margin: 0 auto;
  padding: 3rem 1rem;
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
  flex-wrap: wrap;
  gap: 1.875rem;

  > div {
    &:first-child {
      flex: 1;
    }

    &:last-child {
      width: 50%;
    }

    form {
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

    @media (max-width: 640px) {
      form {
        align-items: flex-end;

        div {
          flex-direction: column-reverse;
          gap: 0.5rem;
        }
      }
    }
  }

  @media (max-width: 1050px) {
    > div {
      &:last-child {
        width: 100%;
      }
    }
  }
`

export const ChampionshipTable = styled.div`
  padding: 1rem;
  border: 1px solid hsl(${(props) => props.theme['--border']});
  border-radius: ${(props) => props.theme['--radius']};
  box-shadow: ${(props) => props.theme['--shadow-sm']};

  @media (max-width: 640px) {
    padding: 0.5rem;
  }
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

  @media (max-width: 640px) {
    img {
      width: 2rem;
      height: 2rem;
    }

    p {
      font-size: 1rem;
    }
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

  @media (max-width: 640px) {
    font-size: 0.75rem;

    img {
      width: 1.2rem;
    }
  }
`

export const BestInLeagueContainer = styled.div`
  > p {
    height: 2.25rem;
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  @media (max-width: 640px) {
    > div {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0.5rem;
    }
  }
`

export const BestTeamCard = styled.div`
  padding: 1rem;
  border: 1px solid hsl(${(props) => props.theme['--border']});
  border-radius: ${(props) => props.theme['--radius']};
  box-shadow: ${(props) => props.theme['--shadow-sm']};

  > div:first-child {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.625rem;

    img {
      width: 3rem;
      height: 3rem;
    }

    span {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      font-size: 0.875rem;
      color: hsl(${(props) => props.theme['--muted-foreground']});
    }
  }

  > div:last-child {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: ${(props) => props.theme['--radius']};
    background-color: hsl(${(props) => props.theme['--muted']});

    p {
      display: flex;
      flex-wrap: nowrap;
      font-size: 0.875rem;
      color: hsl(${(props) => props.theme['--muted-foreground']});

      span {
        margin-left: 0.5rem;
      }
    }

    p:first-child {
      margin-bottom: 0.5rem;
      font-size: 1rem;
      color: hsl(${(props) => props.theme['--card-foreground']});
    }
  }

  @media (max-width: 640px) {
    padding: 0.5rem;

    > div:first-child {
      img {
        width: 2rem;
        height: 2rem;
      }
    }

    > div:last-child {
      p {
        font-size: 0.75rem;
      }
    }
  }
`
