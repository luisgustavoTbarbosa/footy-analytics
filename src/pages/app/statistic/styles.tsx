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
