
type AnimatedSVG = {
  alt: string
  original: {
    src: string
    metadata: {
      size: number
      width: number
      height: number
    }
  }
}

export type Category = {
  id: string
  image: { alt: string }
  activeImage: null | string
  name: string
  path: string
  isLiveCasino: boolean
  links: {
    getPageMetadata: string
    getPage: string
  }
  animatedSvg: {
    mobile: AnimatedSVG
    desktop: AnimatedSVG
  }
  type: 'categoryFilter'
  categoryFilter: string
}
