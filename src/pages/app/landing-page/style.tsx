import styled from 'styled-components'

export const LandingPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.875rem;
  align-items: flex-start;
  max-width: 1250px;
  height: calc(100vh - 52px);
  margin: 0 auto;
  padding: 0.5rem 2rem;

  @media only screen and (max-width: 667px) {
    justify-content: flex-start;
    gap: 2.5rem;
    padding-top: 3rem;
  }
`

export const PresentationInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;

  > div:first-child {
    flex: 1;
  }

  h1 {
    margin-bottom: 0.5rem;
    color: hsl(${(props) => props.theme['--foreground']});
    font-size: 1.5rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  button {
    margin-top: 0.5rem;
    color: hsl(${(props) => props.theme['--primary-foreground']});
  }

  figure {
    width: 55%;
  }

  @media only screen and (max-width: 667px) {
    flex-direction: column-reverse;
    gap: 1rem;

    figure {
      width: auto;
      max-width: 260px;
    }
  }
`

export const TopicInfos = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1.875rem;
  padding: 1.875rem 1.125rem;
  background: hsl(${(props) => props.theme['--accent']});
  color: hsl(${(props) => props.theme['--accent-foreground']});
  border: 1px solid hsl(${(props) => props.theme['--topic-card-border']});
  border-radius: ${(props) => props.theme['--radius']};
  font-size: 1rem;
  box-shadow: ${(props) => props.theme['--shadow-sm']};

  div {
    max-width: 200px;

    p {
      margin-top: 0.5rem;
    }
  }

  @media only screen and (max-width: 667px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 1rem;

    div {
      max-width: unset;
      font-size: 0.8rem;

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`
