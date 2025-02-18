import React from 'react'
import Image from 'next/image'
import { Game } from '@/types/game'
import style from './GameTile.module.scss'


function GameTile({ game }: {game: Game}) {
  
  return (<div className={style.GameTile} key={game.id}>
    <Image
      width={300} 
      height={300} 
      src={game.image.original.src} 
      alt={game.image.alt} 
    />
  
    <h3> {game.gameText} </h3>
  </div>)
}

export default GameTile