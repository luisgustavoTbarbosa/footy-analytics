import { api } from '@/lib/axios'

export async function getMatches() {
  const response = await api.get('/matches', {
    params: {
      date: '2024-11-19',
    },
  })

  return response.data
}
