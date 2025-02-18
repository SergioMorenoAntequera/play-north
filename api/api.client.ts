import Config from "@/types/config"
import { GameList } from "@/types/game"
import Page from "@/types/page"
import axios from "axios"

// const DEFAULT_LOCALE = 'en'

const AXIOS_INSTANCE = axios.create({
  baseURL: 'https://casino.api.pikakasino.com/v1/pika',
  timeout: 3000
})

export type Params = {
  search: string
  pageNumber: string
  pageSize: string
  gameCollections: string
};

type FetchOptions = { params?: Partial<Params> }
const fetch = <T>( path: string, options?: FetchOptions ) => {
  
  path = path.startsWith('/') ? path : `/${path}` 

  return AXIOS_INSTANCE.get(path, { params: options?.params }).then( response => response.data as T )
}

export const fetchConfig     = () => fetch<Config>("/en/config")
export const fetchLobbies    = () => fetchConfig().then( config => config.menu )
export const fetchPage       = ( page: string ) => fetch<Page>(`/pages/en/${page}`)
export const fetchGames      = ( params?: Partial<Params> ) => fetch<GameList>("/en/games/tiles", { params })

export default fetch