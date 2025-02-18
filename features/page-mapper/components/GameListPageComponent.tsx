import React from 'react'
import { Game } from '@/types/game'
import { PageComponent } from '@/types/page'
import GamesList from '@/components/GamesList/GamesList'


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

  return (<GamesList params={{
    gameCollections: props.listParameters?.collections.join(','),
    pageNumber: props.listParameters?.pageNumber.toString(),
    pageSize: props.listParameters?.pageSize.toString(),
  }}/>)
  
}

export default GameListPageComponent