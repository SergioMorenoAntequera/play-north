
type Page = {
  meta: PageMetaData
  components: PageComponent[]
}

type PageMetaData = {
  title: string
  description: string
  path: string
  availableLanguages: {
    en: {
      path: string
    }
    fi: {
      path: string
    }
  }
  indexed: boolean
}

export type PageComponent = {
  id: string
  type: string
}


export default Page

