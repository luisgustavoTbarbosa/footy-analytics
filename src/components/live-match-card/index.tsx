import {
  LiveMatchCardContainer,
  LiveMatchTeams,
  LiveMatchTimes,
} from './styles'

export function LiveMatchCard({ matchData }) {
  console.log('matchData', matchData)
  const county = matchData?.country || {}
  const league = matchData?.league || {}
  const homeTeam = matchData?.homeTeam || {}
  const awayTeam = matchData?.awayTeam || {}

  return (
    <LiveMatchCardContainer>
      <div>
        <img src={league.logo} alt="" />
        <div>
          <p>{county.name}</p>
          <span>{league.name}</span>
        </div>
      </div>
      <div>
        <LiveMatchTimes>
          <p>
            20:00 <span>hrs</span>
          </p>
          <p>
            65 <span>mns</span>
          </p>
        </LiveMatchTimes>
        <LiveMatchTeams>
          <div>
            <img src={homeTeam.logo} alt="" />
            <p>{homeTeam.name}</p>
          </div>
          <div>
            <img src={awayTeam.logo} alt="" />
            <p>{awayTeam.name}</p>
          </div>
        </LiveMatchTeams>
      </div>
    </LiveMatchCardContainer>
  )
}
