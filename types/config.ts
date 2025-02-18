import { Category } from "./categorie"
import { Game } from "./game"


type Config = {
  gamesOfTheMonth: Game[],
  menu: {
    [key: string]: {items: Category[]}
  },
  gameFilterConfig: [],
  liveGameFilterConfig: [],
  metadata: {
    updatedAt: string
  },
  sidebarLinks: [],
  footerContent: {
    logoUrl: string,
    links: [],
    licenseLogos: [],
    copyright: string,
    licenseText: string,
    responsibleGambling: string,
    providerLogos: []
  },
  paymentMethods: [],
  featureToggles: null
}

export default Config