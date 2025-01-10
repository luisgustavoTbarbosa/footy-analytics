import { api } from '@/lib/axios'

export async function getMatches({ queryKey }) {
  const league = queryKey[1]
  // const response = await api.get('/matches', {
  //   params: {
  //     leagueId: Number(league),
  //     date: new Date().toISOString().split('T')[0],
  //   },
  // })

  const response = await api.get('/matches', {
    params: {
      leagueId: '61205',
      date: '2024-12-08',
    },
  })

  return response.data
}
