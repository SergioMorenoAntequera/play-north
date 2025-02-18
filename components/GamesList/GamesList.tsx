"use client"

import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { fetchGames, Params } from '@/api/api.client'
import GameTile from '@/components/GameTile/GameTile'
import { GameList } from '@/types/game'
import style from './GamesList.module.scss'


function GamesList({ params }: {params: Partial<Params>}) { 
  
  const searchParams = useSearchParams()
  
  const [ pageGamesData, setPageGamesData ] = useState<GameList>()
  const [ filters, setFilters ] = useState<Partial<Params>>({
    search: searchParams.get('search') ?? params.search ?? '',
    pageNumber: searchParams.get('pageNumber') ?? params.pageNumber ?? '',
    pageSize: searchParams.get('pageSize') ?? params.pageSize ?? '',
    gameCollections: searchParams.get('gameCollections') ?? params.gameCollections ?? undefined
  })


  const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
    
    const name = e.target.name
    let value = e.target.value

    if(name === 'pageNumber' || name === 'pageSize') { 
      value = value ? Math.max(+value, 1).toString() : ''
    }
    
    const newFilters = { ...filters, [name]: value }
    setFilters(newFilters)

    const updatedSearchParams = new URLSearchParams(searchParams.toString())
    if(value) updatedSearchParams.set(name, value)
    if(!value) updatedSearchParams.delete(name, undefined)
    
    window.history.pushState(null, "", "?" + updatedSearchParams.toString())
  }

  useEffect(() => {

    const timeoutId = setTimeout(async () => {
      const newGames = await fetchGames(filters)
      setPageGamesData(newGames)
    }, 500)

    return () => clearTimeout(timeoutId)

  }, [ filters ]) 

  return (<div>

    <h2> Games List {pageGamesData?.count && `(${pageGamesData.count} in total!)`}</h2>

    <div className={style.PageContent}>

      <div className={style.Filters}>
        <div className={style.Filter}> 
          <p> Search </p>
          <input type="text" value={filters.search} name='search' onChange={updateFilter}/>
        </div>
      
        <div className={style.Filter}>
          <p> Page Size </p>
          <input type="number" value={filters.pageSize} name='pageSize' onChange={updateFilter}/>
        </div>

        <div className={style.Filter}>
          <p> Page </p>
          <input type="number" value={filters.pageNumber} name='pageNumber' onChange={updateFilter} />  
        </div>

        <div className={style.Filter}>
          <p> Game collections </p>
          <input type="text" value={filters.gameCollections} name='gameCollections' onChange={updateFilter} />  
        </div>
      </div>


      <div className={style.GameListGrid}>
      
        {pageGamesData?.items?.map(game => <GameTile key={game.id} game={game}/>)}

      </div>
    
    </div>
    
  </div>)
}

export default GamesList