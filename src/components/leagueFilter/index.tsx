import { zodResolver } from '@hookform/resolvers/zod'
import { RefreshCcw } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

const leagueFilterSchema = z.object({
  league: z.string(),
  year: z.string(),
})

type LeagueFilterSchema = z.infer<typeof leagueFilterSchema>

export function LeagueFilter() {
  const topLeagues = [
    {
      leagueId: 33973,
      name: 'Premier League - Inglaterra',
    },
    {
      leagueId: 52695,
      name: 'Ligue 1 - França',
    },
    {
      leagueId: 61205,
      name: 'Serie A - Brasil',
    },
    {
      leagueId: 67162,
      name: 'Bundesliga - Alemanha',
    },
    {
      leagueId: 75672,
      name: 'Eredivisie - Holanda',
    },
    {
      leagueId: 80778,
      name: 'Primeira Liga - Portugal',
    },
    {
      leagueId: 84182,
      name: 'J1 League - Japão',
    },
    {
      leagueId: 94394,
      name: 'Premier League - País de Gales',
    },
    {
      leagueId: 99500,
      name: 'Premier League - Bielorrússia',
    },
    {
      leagueId: 2486,
      name: 'UEFA Champions League',
    },
  ]

  const { handleSubmit, setValue } = useForm<LeagueFilterSchema>({
    resolver: zodResolver(leagueFilterSchema),
  })

  function handleLeagueFilter(data: LeagueFilterSchema) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(handleLeagueFilter)}>
      <div>
        <Select onValueChange={(value) => setValue('league', value)}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Selecione uma liga" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Ligas</SelectLabel>
              {topLeagues.map((league) => {
                return (
                  <SelectItem
                    key={league.leagueId}
                    value={league.leagueId.toString()}
                  >
                    {league.name}
                  </SelectItem>
                )
              })}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => setValue('year', value)}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Temporada" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" className="refresh-button">
        <RefreshCcw />
      </Button>
    </form>
  )
}
