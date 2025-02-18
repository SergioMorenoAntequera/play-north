import { ReactNode } from "react"
import { PageComponent } from "@/types/page"
import GameListPageComponent from "./components/GameListPageComponent"
import BannerCarouselPageComponent from "./components/BannerCarouselPageComponent"

type PageComponentTypeToComponent = { 
  [key: string]: { Component: (props: PageComponent) => ReactNode }
}

const TYPE_TO_COMPONENT: PageComponentTypeToComponent = {
  ['game-list']: { Component: GameListPageComponent },
  ['banner-carousel']: { Component: BannerCarouselPageComponent }
}

export default TYPE_TO_COMPONENT

