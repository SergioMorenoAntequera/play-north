import { fetchGames, Params } from '@/api/api.client'
import GamesList from '@/features/games-list/GamesList'
import React from 'react'


type GamesPageProps = { searchParams: Promise<Params> }
async function GamesPage({ searchParams }: GamesPageProps) {
  
  const gamesResponse = await fetchGames(await searchParams)
  
  return (<GamesList gamesData={gamesResponse} />)
}

export default GamesPage