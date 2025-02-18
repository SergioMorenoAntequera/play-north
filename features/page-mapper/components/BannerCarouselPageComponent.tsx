import { PageComponent } from '@/types/page'
import React from 'react'

export type GameListProps = PageComponent & Partial<{
  name: string
}>

function BannerCarouselPageComponent(props: GameListProps) {
  
  return (
    <div> In a BannerCarousel: {props.name} </div>
  )
}

export default BannerCarouselPageComponent