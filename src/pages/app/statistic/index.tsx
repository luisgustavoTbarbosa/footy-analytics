import classNames from 'embla-carousel-class-names'
import { TvMinimalPlay } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { LeagueFilter } from '@/components/leagueFilter'
import { LiveMatchCard } from '@/components/live-match-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import {
  BestInLeagueContainer,
  BestTeamCard,
  ChampionshipDetails,
  ChampionshipTable,
  ChampionshipTableHeader,
  LiveMatchesContainer,
  StatisticContainer,
  TeamPosition,
} from './styles'

export function Statistics() {
  // const { data: matches } = useQuery({
  //   queryKey: ['matches'],
  //   queryFn: getMatches,
  // })
  // console.log('matches', matches)

  return (
    <>
      <Helmet title="Estatística" />
      <StatisticContainer>
        <LiveMatchesContainer>
          <div>
            <TvMinimalPlay />
            <p>Rolando agora</p>
          </div>
          <Carousel
            opts={{
              align: 'start',
              loop: true,
              inViewThreshold: 0.8,
              breakpoints: {
                '(min-width: 1024px)': { align: 'center' },
              },
            }}
            plugins={[classNames()]}
          >
            <CarouselContent>
              <CarouselItem className="carousel-item basis-2/3 md:basis-2/5 lg:basis-1/4">
                <LiveMatchCard />
              </CarouselItem>
              <CarouselItem className="carousel-item basis-2/3 md:basis-2/5 lg:basis-1/4">
                <LiveMatchCard />
              </CarouselItem>
              <CarouselItem className="carousel-item basis-2/3 md:basis-2/5 lg:basis-1/4">
                <LiveMatchCard />
              </CarouselItem>
              <CarouselItem className="carousel-item basis-2/3 md:basis-2/5 lg:basis-1/4">
                <LiveMatchCard />
              </CarouselItem>
              <CarouselItem className="carousel-item basis-2/3 md:basis-2/5 lg:basis-1/4">
                <LiveMatchCard />
              </CarouselItem>
              <CarouselItem className="carousel-item basis-2/3 md:basis-2/5 lg:basis-1/4">
                <LiveMatchCard />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-1 hidden bg-primary text-primary-foreground lg:inline-flex" />
            <CarouselNext className="right-1 hidden bg-primary text-primary-foreground lg:inline-flex" />
          </Carousel>
        </LiveMatchesContainer>

        <ChampionshipDetails>
          <div>
            <LeagueFilter />
            <ChampionshipTable>
              <ChampionshipTableHeader>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <div>
                  <p>Brasil</p>
                  <span>Campeonato Brasileiro</span>
                </div>
              </ChampionshipTableHeader>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-full min-w-[150px]"></TableHead>
                    <TableHead className="px-1 text-xs md:px-2">GP</TableHead>
                    <TableHead className="px-1 text-xs md:px-2">W</TableHead>
                    <TableHead className="px-1 text-xs md:px-2">D</TableHead>
                    <TableHead className="px-1 text-xs md:px-2">L</TableHead>
                    <TableHead className="px-1 text-xs md:px-2">GF</TableHead>
                    <TableHead className="px-1 text-xs md:px-2">GA</TableHead>
                    <TableHead className="px-1 text-xs md:px-2">GD</TableHead>
                    <TableHead className="px-1 text-xs md:px-2">PTS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <TeamPosition>
                        1
                        <img
                          src="https://ssl.gstatic.com/onebox/media/sports/logos/4w2Z97Hf9CSOqICK3a8AxQ_96x96.png"
                          alt=""
                        />
                        Santos
                      </TeamPosition>
                    </TableCell>
                    <TableCell className="px-1 text-xs md:px-2">15</TableCell>
                    <TableCell className="px-1 text-xs md:px-2">11</TableCell>
                    <TableCell className="px-1 text-xs md:px-2">2</TableCell>
                    <TableCell className="px-1 text-xs md:px-2">2</TableCell>
                    <TableCell className="px-1 text-xs md:px-2">40</TableCell>
                    <TableCell className="px-1 text-xs md:px-2">12</TableCell>
                    <TableCell className="px-1 text-xs md:px-2">28</TableCell>
                    <TableCell className="px-1 text-xs md:px-2">35</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ChampionshipTable>
          </div>

          <BestInLeagueContainer>
            <p>Os melhores da liga</p>
            <div>
              <BestTeamCard>
                <div>
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <div>
                    <p>Brasil</p>
                    <span>Campeonato Brasileiro</span>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Jogos</p>
                    <p>
                      Vitórias <span>30</span>
                    </p>
                    <p>
                      Derrotas <span>4</span>
                    </p>
                    <p>
                      Empates <span>4</span>
                    </p>
                  </div>
                  <div>
                    <p>Gols</p>
                    <p>
                      Marcados <span>30</span>
                    </p>
                    <p>
                      Recebidos <span>4</span>
                    </p>
                  </div>
                </div>
              </BestTeamCard>
              <BestTeamCard>
                <div>
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <div>
                    <p>Brasil</p>
                    <span>Campeonato Brasileiro</span>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Jogos</p>
                    <p>
                      Vitórias <span>30</span>
                    </p>
                    <p>
                      Derrotas <span>4</span>
                    </p>
                    <p>
                      Empates <span>4</span>
                    </p>
                  </div>
                  <div>
                    <p>Gols</p>
                    <p>
                      Marcados <span>30</span>
                    </p>
                    <p>
                      Recebidos <span>4</span>
                    </p>
                  </div>
                </div>
              </BestTeamCard>
              <BestTeamCard>
                <div>
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <div>
                    <p>Brasil</p>
                    <span>Campeonato Brasileiro</span>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Jogos</p>
                    <p>
                      Vitórias <span>30</span>
                    </p>
                    <p>
                      Derrotas <span>4</span>
                    </p>
                    <p>
                      Empates <span>4</span>
                    </p>
                  </div>
                  <div>
                    <p>Gols</p>
                    <p>
                      Marcados <span>30</span>
                    </p>
                    <p>
                      Recebidos <span>4</span>
                    </p>
                  </div>
                </div>
              </BestTeamCard>
              <BestTeamCard>
                <div>
                  <img
                    src="data:image/png;base64,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"
                    alt=""
                  />
                  <div>
                    <p>Brasil</p>
                    <span>Campeonato Brasileiro</span>
                  </div>
                </div>
                <div>
                  <div>
                    <p>Jogos</p>
                    <p>
                      Vitórias <span>30</span>
                    </p>
                    <p>
                      Derrotas <span>4</span>
                    </p>
                    <p>
                      Empates <span>4</span>
                    </p>
                  </div>
                  <div>
                    <p>Gols</p>
                    <p>
                      Marcados <span>30</span>
                    </p>
                    <p>
                      Recebidos <span>4</span>
                    </p>
                  </div>
                </div>
              </BestTeamCard>
            </div>
          </BestInLeagueContainer>
        </ChampionshipDetails>
      </StatisticContainer>
    </>
  )
}
