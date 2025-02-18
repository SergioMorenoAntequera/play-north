import axios from "axios"

const DEFAULT_LOCALE = 'en'

const axiosInstance = axios.create({
  // URL to ideally be in a .env file and authentification to be added here
  baseURL: 'https://casino.api.pikakasino.com/v1/pika',
  timeout: 1000
})

type Params = {
  search: string
  pageNumber: number
  pageSize: number
};

type FetchOptions = { params?: Params, locale?: string }
const fetch = ( path: string, options?: FetchOptions ) => {
  
  const locale = options?.locale ?? DEFAULT_LOCALE
  path = path.startsWith('/') ? path : `/${path}` 

  return axiosInstance.get(`/${locale}${path}`, { params: options?.params })
}

export const fetchCategories = () => fetch("/config")
export const fetchGames = ( params: Params ) => fetch("/games/tiles", { params })

export default fetch