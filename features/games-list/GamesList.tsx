"use client"

import React, { ChangeEvent, useEffect, useState } from 'react'
import { GameList } from '@/types/game'
import style from './GamesList.module.scss'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import { fetchGames, Params } from '@/api/api.client'

type GameListProps = { gamesData: Partial<GameList> }
function GamesList({ gamesData }: GameListProps) {
  
  const searchParams = useSearchParams()
  
  const [ pageGamesData, setPageGamesData ] = useState(gamesData)
  const [ filters, setFilters ] = useState<Partial<Params>>({
    search: searchParams.get('search') ?? '',
    pageNumber: searchParams.get('pageNumber') ?? '',
    pageSize: searchParams.get('pageSize') ?? '',
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
      </div>


      <div className={style.GameListGrid}>
      
        {pageGamesData?.items?.map(game => <div className={style.GameTile} key={game.id}>
          <Image
            width={300} 
            height={300} 
            src={game.image.original.src} 
            alt={game.image.alt} 
          />
        
          <h3> {game.gameText} </h3>
        </div>)}

      </div>
    
    </div>
    
  </div>)
}

export default GamesList