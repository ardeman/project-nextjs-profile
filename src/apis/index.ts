import axios from 'axios'

export const fetchCsvData = async (url: string) => {
  const response = await axios.get(url, { responseType: 'blob' })
  const text = await response.data.text()
  return text
}
