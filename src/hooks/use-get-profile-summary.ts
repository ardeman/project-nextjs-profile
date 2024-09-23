import { useQuery } from '@tanstack/react-query'

import { fetchCsvData } from '@/apis'

export const useGetProfileSummary = () =>
  useQuery({
    queryKey: ['profile-summary'],
    queryFn: () => fetchCsvData('/linkedin-data-export/Profile Summary.csv'),
  })
