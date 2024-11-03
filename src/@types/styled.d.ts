import 'styled-components'

import { dark } from '@/components/theme/dark'
import { light } from '@/components/theme/light'

type ThemeType = typeof light | typeof dark

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
