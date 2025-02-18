import React from 'react'
import { Game } from '@/types/game'
import { PageComponent } from '@/types/page'


export type GameListProps = PageComponent & Partial<{
  listParameters: {
    providers: string[]
    collections: string[]
    collectionsV2: string[][]
    pageNumber: number
    pageSize: number
    promotedGameIds: string[]
  }
  total: number
  nextPage: string
  games: Game[]
}>

function GameListPageComponent(props: GameListProps) {

  return (<div>
    GAMES LIST PAGE COMPONENT
    {props.games?.map(g => <div key={g.id}> {g.gameText} </div>)}
  </div>)
}

export default GameListPageComponent