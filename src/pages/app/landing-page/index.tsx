import { ChartLine, EyeIcon, LogIn, TvMinimal } from 'lucide-react'

import banner from '@/assets/Banner.png'
import { Button } from '@/components/ui/button'

import { LandingPageContainer, PresentationInfo, TopicInfos } from './style'

export function LandingPage() {
  return (
    <LandingPageContainer>
      <PresentationInfo>
        <div>
          <h1>Onde os números do futebol ganham vida.</h1>
          <p>
            Uma plataforma completa de estatísticas para você entender cada
            lance, gol e vitória do seu time favorito.
          </p>
          <Button>
            Explorar
            <LogIn />
          </Button>
        </div>
        <div></div>
        <figure>
          <img src={banner} alt="Landing page banner" />
        </figure>
      </PresentationInfo>
      <TopicInfos>
        <div>
          <EyeIcon />
          <p>Fique de olho no seu time e campeonato favorito</p>
        </div>
        <div>
          <TvMinimal />
          <p>Acompanhe as melhores jogadas</p>
        </div>
        <div>
          <ChartLine />
          <p>Analise os gráficos de perto</p>
        </div>
      </TopicInfos>
    </LandingPageContainer>
  )
}
