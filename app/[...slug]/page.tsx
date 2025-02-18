import { fetchPage } from '@/api/api.client'
import TYPE_TO_COMPONENT from '@/features/page-mapper'
import React from 'react'


type CasinoPageProps = { params: Promise<{ slug: string[] }> }
export default async function CasinoPage({ params }: CasinoPageProps) {
  

  const slug = await params.then(r => r.slug)
  const page = await fetchPage(slug.join('/'))

  return (<div>
    
    <h1> {page.meta.title} </h1>
    
    { page.components.map(c => <section key={c.id}>
      { TYPE_TO_COMPONENT[c.type]?.Component({ ...c }) }
    </section> )}

  </div>)
}
