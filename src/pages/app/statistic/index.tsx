import classNames from 'embla-carousel-class-names'
import { TvMinimalPlay } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { LiveMatchCard } from '@/components/live-match-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { LiveMatchesContainer, StatisticContainer } from './styles'

export function Statistics() {
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

        <div>dasd</div>

        <div>sad</div>
      </StatisticContainer>
    </>
  )
}
