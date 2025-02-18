import { Params } from '@/api/api.client'
import GamesList from '@/components/GamesList/GamesList'
import React from 'react'


type GamesPageProps = { searchParams: Promise<Params> }
async function GamesPage({ searchParams }: GamesPageProps) {
  
  const params = await searchParams
  
  return (<GamesList params={params}/>)
}

export default GamesPage