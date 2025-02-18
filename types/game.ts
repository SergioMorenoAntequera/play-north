
type ImageMetadata = {
  src: string
  metadata: Record<string, number>
}

type ImageSet = {
  [key: number]: ImageMetadata
  alt: string
  original: ImageMetadata
  small: ImageMetadata
  thumbnail: ImageMetadata
}

type Tag = {
  value: string
  color: string
  backgroundColor: string
}

export type Game = {
  type: string
  id: string
  platformId: string
  slug: string
  image: ImageSet
  gameText: string
  provider: string
  provider_slug: string
  tag: Tag
  betSize: {
    min: number
  }
  isLiveGame: boolean
}

export type GameList = {
  items: Game[]
  count: number
  previousPage: string
  nextPage: string
}